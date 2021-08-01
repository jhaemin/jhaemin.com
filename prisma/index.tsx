import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient = null as unknown as PrismaClient

if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
  } else {
    if (!(global as any).prisma) {
      ;(global as any).prisma = new PrismaClient()
    }

    prisma = (global as any).prisma
  }
}

export default prisma
