const { Pool, neonConfig } = require('@neondatabase/serverless');
const bcrypt = require('bcryptjs');
const ws = require('ws');
require('dotenv').config();

neonConfig.webSocketConstructor = ws;

async function setupDatabase() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  
  try {
    console.log('Setting up database tables...');
    
    // Create sessions table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS sessions (
        sid VARCHAR PRIMARY KEY,
        sess JSON NOT NULL,
        expire TIMESTAMP NOT NULL
      );
    `);
    
    // Create index on expire column
    await pool.query(`
      CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON sessions (expire);
    `);
    
    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR PRIMARY KEY,
        email VARCHAR UNIQUE NOT NULL,
        password VARCHAR NOT NULL,
        name VARCHAR,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);
    
    // Create demo user
    const email = 'demo@portfolio.com';
    const password = 'demo123';
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await pool.query(`
      INSERT INTO users (id, email, password, name) 
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (email) DO NOTHING;
    `, [Date.now().toString(), email, hashedPassword, 'Demo User']);
    
    console.log('Database setup completed successfully!');
    console.log('Demo user created:');
    console.log('Email: demo@portfolio.com');
    console.log('Password: demo123');
    
  } catch (error) {
    console.error('Database setup error:', error);
  } finally {
    await pool.end();
  }
}

setupDatabase();