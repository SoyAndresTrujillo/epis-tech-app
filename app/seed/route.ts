import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
  CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    faculty TEXT NOT NULL,
    program TEXT NOT NULL
    );
    `;
  console.log('step second');

  const uniqueUsers = Array.from(
    new Map(users.map((user) => [user.email, user])).values()
  );

  const insertedUsers = await Promise.all(
    uniqueUsers.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
      INSERT INTO users (id, full_name, email, password, faculty, program)
      VALUES (${user.id}, ${user.full_name}, ${user.email}, ${hashedPassword}, ${user.faculty}, ${user.program})
      ON CONFLICT (id) DO NOTHING;
      `;
    })
  );
  console.log('step third');

  return insertedUsers;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.log({ error });
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
