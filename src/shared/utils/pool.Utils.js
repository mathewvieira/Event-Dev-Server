import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma || new PrismaClient()

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = prisma

  const gracefulShutdown = async () => {
    await prisma.$disconnect()
    process.exit(0)
  }

  process.on('SIGINT', gracefulShutdown) // Ctrl+C
  process.on('SIGTERM', gracefulShutdown) // Docker stop
  process.on('beforeExit', gracefulShutdown) // Node.js shutdown
}

export default prisma
