const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

// 1. AI Job Recommendations
router.post('/recommendations', aiController.getRecommendations);

// 2. Resume-to-Job Matching
router.post('/match-resume', aiController.matchResumeToJobs);

// 3. Deep AI Resume Scoring & Audit
router.post('/score-resume', aiController.scoreResume);

// 4. Skill Gap Analysis
router.post('/skill-gap', aiController.analyzeSkillGap);

// 5. AI Interview Preparation
router.get('/interview/questions', aiController.getInterviewQuestions);
router.post('/interview/evaluate', aiController.evaluateInterviewAnswer);

// 6. AI Chatbot for Job Seekers (Career Copilot)
router.post('/chat', aiController.chatWithCareerCopilot);

// 7. Duplicate & Suspicious Job Detection
router.post('/audit-job', aiController.auditJobSecurity);

// 8. Personalized Career Recommendations
router.post('/career-path', aiController.getCareerPath);

module.exports = router;
