const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Application = sequelize.define('Application', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  jobId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resume: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  highestQualification: {
    type: DataTypes.STRING,
  },
  totalExperience: {
    type: DataTypes.STRING,
  },
  currentLocation: {
    type: DataTypes.STRING,
  },
  noticePeriod: {
    type: DataTypes.STRING,
  },
  availableToWorkInChennai: {
    type: DataTypes.STRING,
  },
  expectedCTC: {
    type: DataTypes.STRING,
  },
  keyTechStack: {
    type: DataTypes.STRING,
  },
  portfolioLink: {
    type: DataTypes.STRING,
  },
  coverLetter: {
    type: DataTypes.TEXT,
  },
  additionalInformation: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.ENUM('Applied', 'Under Review', 'Shortlisted', 'Interview', 'Selected', 'Rejected'),
    defaultValue: 'Applied',
  },
  atsScore: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  atsBreakdown: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  }
}, {
  indexes: [
    {
      unique: true,
      fields: ['userId', 'jobId']
    }
  ]
});

module.exports = Application;
