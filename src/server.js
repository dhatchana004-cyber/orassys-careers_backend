require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./config/db');
const { syncDB } = require('./models');

const startServer = async () => {
  await connectDB();
  await syncDB(); // Sync Sequelize models

  const PORT = process.env.PORT || 5002;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
