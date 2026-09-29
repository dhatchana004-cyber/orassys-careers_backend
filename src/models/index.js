const { sequelize } = require('../config/db');
const User = require('./User');
const Job = require('./Job');
const Application = require('./Application');

// Define relationships
User.hasMany(Job, { foreignKey: 'createdBy', as: 'jobs' });
Job.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' });

User.hasMany(Application, { foreignKey: 'userId', as: 'applications' });
Application.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Job.hasMany(Application, { foreignKey: 'jobId', as: 'applications' });
Application.belongsTo(Job, { foreignKey: 'jobId', as: 'job' });

const syncDB = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database sync complete');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

module.exports = {
  User,
  Job,
  Application,
  syncDB
};
