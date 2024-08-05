export default defineEventHandler(async (event) => {
  const db = getDb(event)
  const data = await db.prepare('SELECT * FROM cabang order by name asc').all()
  return data.results
})
