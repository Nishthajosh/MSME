import { cookies } from 'next/headers';

const ADMIN_SESSION_COOKIE = 'admin_session';

export async function createSession(adminId: string) {
  const cookieStore = await cookies();
  // Simple session token (in production, use JWT or better session management)
  const sessionToken = Buffer.from(`${adminId}:${Date.now()}`).toString('base64');
  
  cookieStore.set(ADMIN_SESSION_COOKIE, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
  
  return sessionToken;
}

export async function getSession() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  
  if (!sessionToken) return null;
  
  try {
    const decoded = Buffer.from(sessionToken, 'base64').toString();
    const [adminId] = decoded.split(':');
    return { adminId };
  } catch {
    return null;
  }
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_COOKIE);
}

// Simple password hashing (in production, use bcrypt)
export function hashPassword(password: string): string {
  const crypto = require('crypto');
  return crypto.createHash('sha256').update(password).digest('hex');
}

export function verifyPassword(password: string, hashedPassword: string): boolean {
  return hashPassword(password) === hashedPassword;
}
