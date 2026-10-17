const aiService = require('../services/aiIntelligenceService');
const Job = require('../models/Job');
const Application = require('../models/Application');

/**
 * 1. AI Job Recommendations Endpoint
 */
exports.getRecommendations = async (req, res) => {
  try {
    const { skills, experience, title, experienceYears } = req.body;
    const jobs = await Job.findAll({ where: { status: 'published' } });

    const recommendations = aiService.getAIJobRecommendations(
      { skills: skills || [], experience, title, experienceYears },
      jobs
    );

    res.json({ success: true, data: recommendations });
  } catch (error) {
    console.error('Error fetching AI recommendations:', error);
    res.status(500).json({ success: false, message: 'Failed to generate recommendations' });
  }
};

/**
 * 2. Resume-to-Job Matching Endpoint
 */
exports.matchResumeToJobs = async (req, res) => {
  try {
    const { resumeText } = req.body;
    const jobs = await Job.findAll({ where: { status: 'published' } });

    const matches = aiService.matchResumeToJobs(resumeText || '', jobs);
    res.json({ success: true, data: matches });
  } catch (error) {
    console.error('Error matching resume to jobs:', error);
    res.status(500).json({ success: false, message: 'Failed to match resume to jobs' });
  }
};

/**
 * 3. Deep AI Resume Scoring & Audit Endpoint
 */
exports.scoreResume = async (req, res) => {
  try {
    const { resumeText, targetRole } = req.body;
    const auditResult = aiService.scoreResumeDeep(resumeText || '', targetRole || '');
    res.json({ success: true, data: auditResult });
  } catch (error) {
    console.error('Error scoring resume:', error);
    res.status(500).json({ success: false, message: 'Failed to score resume' });
  }
};

/**
 * 4. Skill Gap Analysis Endpoint
 */
exports.analyzeSkillGap = async (req, res) => {
  try {
    const { candidateSkills, targetJobId, targetRole } = req.body;
    let targetJob = null;

    if (targetJobId) {
      targetJob = await Job.findByPk(targetJobId);
    }

    const gapAnalysis = aiService.analyzeSkillGaps(candidateSkills || [], targetJob || targetRole || 'Frontend Developer');
    res.json({ success: true, data: gapAnalysis });
  } catch (error) {
    console.error('Error analyzing skill gaps:', error);
    res.status(500).json({ success: false, message: 'Failed to analyze skill gaps' });
  }
};

/**
 * 5. AI Interview Preparation: Get Questions & Evaluate Answer
 */
exports.getInterviewQuestions = async (req, res) => {
  try {
    const { role, category } = req.query;
    const questions = aiService.generateInterviewQuestions(role || 'Frontend Developer', category || 'All');
    res.json({ success: true, data: questions });
  } catch (error) {
    console.error('Error generating interview questions:', error);
    res.status(500).json({ success: false, message: 'Failed to generate interview questions' });
  }
};

exports.evaluateInterviewAnswer = async (req, res) => {
  try {
    const { question, candidateAnswer } = req.body;
    const evaluation = aiService.evaluateInterviewAnswer(question, candidateAnswer);
    res.json({ success: true, data: evaluation });
  } catch (error) {
    console.error('Error evaluating interview answer:', error);
    res.status(500).json({ success: false, message: 'Failed to evaluate interview answer' });
  }
};

/**
 * 6. AI Chatbot for Job Seekers (Career Assistant)
 */
exports.chatWithCareerCopilot = async (req, res) => {
  try {
    const { message } = req.body;
    const openJobs = await Job.findAll({ where: { status: 'published' } });
    const response = aiService.processAIChatMessage(message || '', openJobs);
    res.json({ success: true, data: response });
  } catch (error) {
    console.error('Error processing AI chat message:', error);
    res.status(500).json({ success: false, message: 'Chat assistant temporarily unavailable' });
  }
};
exports.chatWithCareerAssistant = exports.chatWithCareerCopilot;

/**
 * 7. Duplicate & Suspicious Job Detection (Admin / Candidate Protection)
 */
exports.auditJobSecurity = async (req, res) => {
  try {
    const { jobData } = req.body;
    const existingJobs = await Job.findAll();
    const auditReport = aiService.detectSuspiciousAndDuplicateJobs(jobData || {}, existingJobs);
    res.json({ success: true, data: auditReport });
  } catch (error) {
    console.error('Error auditing job security:', error);
    res.status(500).json({ success: false, message: 'Failed to audit job security' });
  }
};

/**
 * 8. Personalized Career Recommendations
 */
exports.getCareerPath = async (req, res) => {
  try {
    const { currentRole, candidateSkills, experienceYears } = req.body;
    const path = aiService.getPersonalizedCareerPath(currentRole, candidateSkills, experienceYears);
    res.json({ success: true, data: path });
  } catch (error) {
    console.error('Error generating career path:', error);
    res.status(500).json({ success: false, message: 'Failed to generate career recommendations' });
  }
};
