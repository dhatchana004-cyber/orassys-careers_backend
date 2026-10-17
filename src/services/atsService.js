const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');

/**
 * Common skill aliases and mappings for smart ATS matching
 */
const SKILL_ALIASES = {
  'react': ['react', 'react.js', 'reactjs', 'react native'],
  'react.js': ['react', 'react.js', 'reactjs'],
  'reactjs': ['react', 'react.js', 'reactjs'],
  'node': ['node', 'node.js', 'nodejs'],
  'node.js': ['node', 'node.js', 'nodejs'],
  'nodejs': ['node', 'node.js', 'nodejs'],
  'express': ['express', 'express.js', 'expressjs'],
  'express.js': ['express', 'express.js', 'expressjs'],
  'javascript': ['javascript', 'js', 'es6', 'ecmascript'],
  'js': ['javascript', 'js', 'es6'],
  'typescript': ['typescript', 'ts'],
  'ts': ['typescript', 'ts'],
  'python': ['python', 'py', 'django', 'flask', 'fastapi'],
  'java': ['java', 'spring', 'springboot', 'spring boot', 'j2ee'],
  'c++': ['c++', 'cpp'],
  'c#': ['c#', 'csharp', '.net', 'dotnet', 'asp.net'],
  'postgres': ['postgres', 'postgresql', 'psql'],
  'postgresql': ['postgres', 'postgresql', 'psql'],
  'mongo': ['mongo', 'mongodb'],
  'mongodb': ['mongo', 'mongodb'],
  'sql': ['sql', 'mysql', 'postgresql', 'sqlite', 'plsql', 't-sql'],
  'mysql': ['mysql'],
  'aws': ['aws', 'amazon web services', 'ec2', 's3', 'lambda'],
  'azure': ['azure', 'microsoft azure'],
  'gcp': ['gcp', 'google cloud', 'google cloud platform'],
  'docker': ['docker', 'container', 'containerization'],
  'kubernetes': ['kubernetes', 'k8s'],
  'git': ['git', 'github', 'gitlab', 'bitbucket'],
  'html': ['html', 'html5'],
  'css': ['css', 'css3', 'tailwind', 'bootstrap', 'sass', 'scss'],
  'tailwind': ['tailwind', 'tailwind css', 'tailwindcss'],
  'bootstrap': ['bootstrap', 'bootstrap 5'],
  'next.js': ['next.js', 'nextjs', 'next'],
  'vue': ['vue', 'vue.js', 'vuejs'],
  'angular': ['angular', 'angularjs'],
  'redux': ['redux', 'redux toolkit', 'rtk'],
  'rest': ['rest', 'restful', 'rest api', 'apis'],
  'graphql': ['graphql', 'apollo'],
  'php': ['php', 'laravel', 'codeigniter'],
  'flutter': ['flutter', 'dart'],
  'figma': ['figma', 'ui/ux', 'ui design', 'ux design']
};

/**
 * Extract clean text from resume file (PDF or DOCX)
 */
const extractTextFromResume = async (filePath) => {
  if (!filePath || !fs.existsSync(filePath)) {
    return '';
  }

  const ext = path.extname(filePath).toLowerCase();
  let text = '';

  try {
    if (ext === '.pdf') {
      const dataBuffer = fs.readFileSync(filePath);
      const data = await pdfParse(dataBuffer);
      text = data.text || '';
    } else if (ext === '.docx' || ext === '.doc') {
      const result = await mammoth.extractRawText({ path: filePath });
      text = result.value || '';
    } else {
      text = fs.readFileSync(filePath, 'utf8');
    }
  } catch (error) {
    console.error(`Error extracting text from ${filePath}:`, error.message);
    text = '';
  }

  return text;
};

/**
 * Helper to escape special regex characters (e.g. C++, C#, .NET)
 */
const escapeRegex = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

/**
 * Check if a skill exists in resume text or candidate keyTechStack
 */
const matchSkill = (skill, textLower, techStackTextLower) => {
  const cleanSkill = skill.toLowerCase().trim();
  if (!cleanSkill) return false;

  // 1. Direct regex check with word boundary
  let pattern;
  if (cleanSkill === 'c++') {
    pattern = /(?:^|\s|\/|,|;)c\+\+(?:$|\s|\/|,|;)/i;
  } else if (cleanSkill === 'c#') {
    pattern = /(?:^|\s|\/|,|;)c#(?:$|\s|\/|,|;)/i;
  } else if (cleanSkill === '.net') {
    pattern = /(?:^|\s|\/|,|;)\.net(?:$|\s|\/|,|;)/i;
  } else {
    pattern = new RegExp(`\\b${escapeRegex(cleanSkill)}\\b`, 'i');
  }

  if (pattern.test(textLower) || pattern.test(techStackTextLower)) {
    return true;
  }

  // 2. Alias / Synonyms check
  const aliases = SKILL_ALIASES[cleanSkill];
  if (aliases && aliases.length > 0) {
    for (const alias of aliases) {
      let aliasPattern;
      if (alias === 'c++') aliasPattern = /(?:^|\s|\/|,|;)c\+\+(?:$|\s|\/|,|;)/i;
      else if (alias === 'c#') aliasPattern = /(?:^|\s|\/|,|;)c#(?:$|\s|\/|,|;)/i;
      else if (alias === '.net') aliasPattern = /(?:^|\s|\/|,|;)\.net(?:$|\s|\/|,|;)/i;
      else aliasPattern = new RegExp(`\\b${escapeRegex(alias)}\\b`, 'i');

      if (aliasPattern.test(textLower) || aliasPattern.test(techStackTextLower)) {
        return true;
      }
    }
  }

  return false;
};

/**
 * Convert experience string into estimated numeric years
 */
const parseYearsOfExperience = (expStr) => {
  if (!expStr) return 0;
  const lower = expStr.toLowerCase().trim();
  if (lower.includes('fresher') || lower.includes('0-1')) return 0.5;
  if (lower.includes('1-3')) return 2;
  if (lower.includes('3-5')) return 4;
  if (lower.includes('5+')) return 6;

  // Extract first number if present
  const match = lower.match(/(\d+(?:\.\d+)?)/);
  if (match) {
    return parseFloat(match[1]);
  }
  return 0;
};

/**
 * Main ATS Scoring Algorithm
 * Compares Candidate Profile + Resume Text against Job Requirements
 */
const calculateATSScore = ({ resumeText = '', candidate = {}, job = {} }) => {
  const textLower = (resumeText || '').toLowerCase();
  const techStackLower = (candidate.keyTechStack || '').toLowerCase();

  // -------------------------------------------------------------
  // 1. SKILLS & KEYWORDS MATCH (45 Points)
  // -------------------------------------------------------------
  let requiredSkills = [];
  if (Array.isArray(job.requiredSkills)) {
    requiredSkills = job.requiredSkills.filter(s => typeof s === 'string' && s.trim().length > 0);
  } else if (typeof job.requiredSkills === 'string') {
    requiredSkills = job.requiredSkills.split(/[,|\n]/).map(s => s.trim()).filter(Boolean);
  }

  // If no required skills explicitly declared on job, extract top technical keywords from job description
  if (requiredSkills.length === 0 && job.description) {
    const commonTech = [
      'React', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 'Java', 'SQL',
      'MongoDB', 'PostgreSQL', 'Express', 'HTML', 'CSS', 'Tailwind', 'AWS',
      'Docker', 'Git', 'Next.js', 'Redux', 'REST API', 'Figma'
    ];
    requiredSkills = commonTech.filter(tech => {
      const reg = new RegExp(`\\b${escapeRegex(tech.toLowerCase())}\\b`, 'i');
      return reg.test(job.description.toLowerCase());
    });
  }

  const matchedSkills = [];
  const missingSkills = [];

  if (requiredSkills.length > 0) {
    requiredSkills.forEach(skill => {
      if (matchSkill(skill, textLower, techStackLower)) {
        matchedSkills.push(skill);
      } else {
        missingSkills.push(skill);
      }
    });
  }

  let skillsScore = 0;
  const maxSkillsScore = 45;

  if (requiredSkills.length > 0) {
    const ratio = matchedSkills.length / requiredSkills.length;
    skillsScore = Math.round(ratio * maxSkillsScore);
  } else {
    // If job has zero skills defined, give a default baseline if candidate has tech stack
    skillsScore = candidate.keyTechStack ? 35 : 25;
  }

  // -------------------------------------------------------------
  // 2. EXPERIENCE MATCH (25 Points)
  // -------------------------------------------------------------
  const requiredExpYears = parseYearsOfExperience(job.experience || '0-1 Yrs');
  const candidateExpYears = parseYearsOfExperience(candidate.totalExperience || '0');

  let experienceScore = 0;
  const maxExperienceScore = 25;
  let meetsExperience = false;

  if (candidateExpYears >= requiredExpYears) {
    experienceScore = 25;
    meetsExperience = true;
  } else if (candidateExpYears >= requiredExpYears * 0.6) {
    // Within 60% of required experience (e.g. 1.5 yrs vs 2 yrs)
    experienceScore = 18;
  } else if (candidateExpYears > 0) {
    // Has some experience
    experienceScore = 10;
  } else {
    // Fresher applying for senior role
    experienceScore = requiredExpYears <= 1 ? 25 : 5;
    meetsExperience = requiredExpYears <= 1;
  }

  // -------------------------------------------------------------
  // 3. QUALIFICATION / EDUCATION MATCH (15 Points)
  // -------------------------------------------------------------
  let qualificationScore = 0;
  const maxQualificationScore = 15;
  let meetsQualification = false;

  const candidateQual = (candidate.highestQualification || '').toLowerCase();
  const degreeRegex = /\b(b\.?tech|b\.?e\.?|m\.?tech|m\.?e\.?|mca|bca|b\.?sc|m\.?sc|b\.?com|mba|diploma|bachelor|master|degree)\b/i;

  const hasDegreeInText = degreeRegex.test(textLower) || degreeRegex.test(candidateQual);

  let jobQuals = [];
  if (Array.isArray(job.qualifications)) {
    jobQuals = job.qualifications.map(q => q.toLowerCase());
  } else if (typeof job.qualifications === 'string') {
    jobQuals = [job.qualifications.toLowerCase()];
  }

  if (jobQuals.length === 0) {
    // No specific qualification demanded
    qualificationScore = hasDegreeInText ? 15 : 10;
    meetsQualification = true;
  } else {
    const matchesJobQual = jobQuals.some(q => 
      candidateQual.includes(q) || (hasDegreeInText && textLower.includes(q))
    );
    if (matchesJobQual) {
      qualificationScore = 15;
      meetsQualification = true;
    } else if (hasDegreeInText) {
      qualificationScore = 12;
      meetsQualification = true;
    } else {
      qualificationScore = 7;
    }
  }

  // -------------------------------------------------------------
  // 4. ATS READABILITY & RESUME STRUCTURE (15 Points)
  // -------------------------------------------------------------
  let formattingScore = 0;
  const maxFormattingScore = 15;

  // Contact Info Check
  const hasEmail = Boolean(candidate.email || /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6})\b/i.test(textLower));
  const hasPhone = Boolean(candidate.phone || /(?:\+?\d{1,3}[\s.-]?)?[6789]\d{9}\b/.test(textLower));
  const hasLinks = Boolean(candidate.portfolioLink || /(github\.com|linkedin\.com|gitlab\.com|portfolio|behance|vercel\.app)/i.test(textLower));

  if (hasEmail) formattingScore += 3;
  if (hasPhone) formattingScore += 3;
  if (hasLinks) formattingScore += 3;

  // Standard Sections Check
  const hasExpSection = /(experience|work history|employment|internship|projects)/i.test(textLower);
  const hasEduSection = /(education|academics|qualification|university|college|school)/i.test(textLower);

  if (hasExpSection) formattingScore += 3;
  if (hasEduSection) formattingScore += 3;

  // Word count check: reasonable resume is 150 - 4000 words
  const wordCount = textLower.split(/\s+/).filter(Boolean).length;
  if (wordCount < 50 && resumeText.length > 0) {
    formattingScore = Math.max(0, formattingScore - 5); // Empty or broken file penalty
  }

  // -------------------------------------------------------------
  // TOTAL SCORE & EVALUATION
  // -------------------------------------------------------------
  const totalScore = Math.min(100, Math.max(0, 
    skillsScore + experienceScore + qualificationScore + formattingScore
  ));

  let grade = 'Low Match';
  let color = 'red';
  if (totalScore >= 80) {
    grade = 'High Match';
    color = 'green';
  } else if (totalScore >= 60) {
    grade = 'Medium Match';
    color = 'yellow';
  } else if (totalScore >= 40) {
    grade = 'Fair Match';
    color = 'blue';
  }

  // Strengths & Improvement Suggestions
  const strengths = [];
  const improvements = [];

  if (matchedSkills.length > 0) {
    strengths.push(`Matched ${matchedSkills.length}/${requiredSkills.length} key required skills (${matchedSkills.slice(0, 4).join(', ')})`);
  }
  if (meetsExperience) {
    strengths.push(`Experience (${candidate.totalExperience || 'Experienced'}) meets job requirement (${job.experience || 'Flexible'})`);
  }
  if (hasLinks) {
    strengths.push('Portfolio or professional profile links detected');
  }

  if (missingSkills.length > 0) {
    improvements.push(`Missing important skills: ${missingSkills.slice(0, 5).join(', ')}`);
  }
  if (!meetsExperience) {
    improvements.push(`Experience is below the preferred requirement (${job.experience || 'Experienced'})`);
  }
  if (!hasLinks) {
    improvements.push('Add GitHub or Portfolio links to improve ATS score');
  }

  return {
    totalScore,
    grade,
    color,
    breakdown: {
      skills: {
        score: skillsScore,
        maxScore: maxSkillsScore,
        matched: matchedSkills,
        missing: missingSkills,
        matchPercentage: requiredSkills.length > 0 
          ? Math.round((matchedSkills.length / requiredSkills.length) * 100)
          : 100
      },
      experience: {
        score: experienceScore,
        maxScore: maxExperienceScore,
        candidate: candidate.totalExperience || 'Fresher',
        required: job.experience || 'Not specified',
        meetsRequirement: meetsExperience
      },
      qualification: {
        score: qualificationScore,
        maxScore: maxQualificationScore,
        candidate: candidate.highestQualification || 'Not specified',
        meetsRequirement: meetsQualification
      },
      formatting: {
        score: formattingScore,
        maxScore: maxFormattingScore,
        hasEmail,
        hasPhone,
        hasLinks,
        hasExpSection,
        hasEduSection,
        wordCount
      }
    },
    strengths,
    improvements
  };
};

module.exports = {
  extractTextFromResume,
  calculateATSScore,
  matchSkill,
  parseYearsOfExperience
};
