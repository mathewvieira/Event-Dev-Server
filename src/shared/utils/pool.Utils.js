import { PrismaClient } from '@prisma/client'

let instance

export default function getPool() {
  if (!instance) instance = new PrismaClient()
  return instance
}
