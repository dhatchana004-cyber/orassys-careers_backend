const { Client } = require('pg');

const createDatabase = async () => {
  const client = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres', // Connect to default database
  });

  try {
    await client.connect();
    const res = await client.query('SELECT datname FROM pg_database WHERE datname = \'job-portal\'');
    if (res.rowCount === 0) {
      await client.query('CREATE DATABASE "job-portal"');
      console.log('Database "job-portal" created successfully');
    } else {
      console.log('Database "job-portal" already exists');
    }
  } catch (err) {
    console.error('Error creating database:', err.stack);
  } finally {
    await client.end();
  }
};

createDatabase();
