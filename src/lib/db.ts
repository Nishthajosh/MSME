import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient | null {
  // Skip Prisma initialization if no DATABASE_URL (during build)
  if (!process.env.DATABASE_URL) {
    console.warn('DATABASE_URL not set, Prisma client not initialized');
    return null;
  }
  
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
  }
  return globalForPrisma.prisma;
}

const prisma = createPrismaClient();

export { prisma };
export default prisma;
