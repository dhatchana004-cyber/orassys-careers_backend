const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Job = sequelize.define('Job', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employmentType: {
    type: DataTypes.STRING,
    defaultValue: 'Full-time'
  },
  experience: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salaryRange: {
    type: DataTypes.STRING,
  },
  vacancies: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  badgeLabel: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  responsibilities: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    defaultValue: []
  },
  requiredSkills: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: []
  },
  qualifications: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: []
  },
  benefits: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: []
  },
  applicationDeadline: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.ENUM('draft', 'published', 'closed'),
    defaultValue: 'draft',
  },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: false,
  }
});

module.exports = Job;
