// import { PrismaClient } from '@prisma/client'
// import prisma from '@@/lib/prisma'

export default eventHandler(async (event) => {
  const db = getDb(event)
  const data = await db.prepare('SELECT * FROM admin order by id desc').all()
  return data.results
})
