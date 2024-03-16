import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    log: ['warn', 'error']
  })
} else {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error']
    })
  }
  prisma = globalForPrisma.prisma
}

export const db = prisma
export interface DatabaseUser {
  id: string
  username: string
  githubId: number
  firstName: string
  lastName: string
  email: string
  emailVerified: Date
  image: string
  createdAt: Date
  updatedAt: Date
}
