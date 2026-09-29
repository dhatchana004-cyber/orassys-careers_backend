require('dotenv').config();
const { connectDB } = require('./src/config/db');
const { User, syncDB } = require('./src/models');

const createAdmin = async () => {
  try {
    await connectDB();
    await syncDB();

    const email = 'admin@example.com';
    const password = 'password123';

    const existingAdmin = await User.findOne({ where: { email } });

    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit();
    }

    await User.create({
      name: 'System Admin',
      email,
      password,
      phone: '1234567890',
      role: 'admin',
    });

    console.log(`Admin user created: ${email} / ${password}`);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();
