const text = `
SURIYA MOORTHY
suriyamoorthy@example.com | +91 98765 43210
Chennai, Tamil Nadu

EXPERIENCE
Software Engineer
Tech Company
Experience: 2.5 years
- Developed web applications using React, Node.js, and MongoDB.
- Wrote API endpoints using Express and PostgreSQL.

EDUCATION
B.E Computer Science
Anna University
2018 - 2022

SKILLS
JavaScript, Python, C++, AWS, Docker, HTML, CSS
`;

const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
let fullName = '';
for (const line of lines) {
  if (!/^(resume|curriculum vitae|cv|profile)$/i.test(line)) {
    fullName = line;
    break;
  }
}
if (fullName.length > 40) fullName = fullName.substring(0, 40) + '...';

const emailMatch = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/i);
const email = emailMatch ? emailMatch[0] : '';

const phoneMatch = text.match(/(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}|(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/);
const phone = phoneMatch ? phoneMatch[0].trim() : '';

let totalExperience = 'Fresher (0-1 Yrs)';
if (/(fresher|0 years|0 yrs|no experience)/i.test(text)) {
  totalExperience = 'Fresher (0-1 Yrs)';
} else {
  const expMatch = text.match(/(\d+(?:\.\d+)?)\+?\s*(?:years?|yrs?)(?:\s*of)?\s*experience/i) || text.match(/experience\s*[:\-]?\s*(\d+(?:\.\d+)?)\+?\s*(?:years?|yrs?)/i);
  if (expMatch) {
    const years = parseFloat(expMatch[1]);
    if (years >= 5) totalExperience = '5+ Years';
    else if (years >= 3) totalExperience = '3-5 Years';
    else if (years >= 1) totalExperience = '1-3 Years';
  }
}

const techKeywords = ['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'SQL', 'MongoDB', 'Express', 'HTML', 'CSS', 'AWS', 'Docker', 'Angular', 'Vue', 'Next.js', 'PostgreSQL', 'TypeScript', 'C\\+\\+', 'C#', 'PHP', 'Ruby', 'Swift', 'Kotlin', 'Go'];
const foundTech = techKeywords.filter(tech => {
  if (tech === 'C\\+\\+') return new RegExp('C\\+\\+', 'i').test(text);
  const escapedTech = tech.replace(/\./g, '\\.');
  return new RegExp(`\\b${escapedTech}\\b`, 'i').test(text);
});
const keyTechStack = foundTech.map(t => t.replace(/\\/g, '')).join(', ');

let highestQualification = 'Other';
if (/M\.?Tech|M\.?E\.?|Master of Technology|Master of Engineering/i.test(text)) highestQualification = 'M.E / M.Tech';
else if (/B\.?Tech|B\.?E\.?|Bachelor of Technology|Bachelor of Engineering/i.test(text)) highestQualification = 'B.E / B.Tech';
else if (/M\.?Sc|Master of Science/i.test(text)) highestQualification = 'B.Sc / M.Sc';
else if (/B\.?Sc|Bachelors? of Science/i.test(text)) highestQualification = 'B.Sc / M.Sc';
else if (/MCA|Master of Computer Applications/i.test(text)) highestQualification = 'BCA / MCA';
else if (/BCA|Bachelor of Computer Applications/i.test(text)) highestQualification = 'BCA / MCA';

console.log({ fullName, email, phone, totalExperience, keyTechStack, highestQualification });
