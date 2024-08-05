import { validateJWT } from 'oslo/jwt'
import type { Admin } from '~~/types/Admin'
import type { Berita } from '~~/types/Berita'

export default defineEventHandler(async (event) => {
  const db = event.context.cloudflare.env.DB
  const token = event.node.req.headers.authorization?.split(' ')[1]
  if (!token) {
    const stmt = await db.prepare('select * from news').all()
    return stmt.results
  }

  const id = ((await validateJWT('HS256', jwtSecret, token)).payload as { id: string }).id
  const admin = await db.prepare('select * from admin where id = ?').bind(id).first<Admin>()

  if (!admin?.is_moderator) {
    const stmt = await db.prepare('select * from news where admin_id = ?').bind(admin?.id).all()
    return stmt.results as unknown as Berita[]
  }

  if (admin.is_admin_daerah) {
    const stmt = await db.prepare('select n.* from news n inner join admin a on a.id = n.admin_id where a.is_admin_daerah = 1').all()
    return stmt.results as unknown as Berita[]
  }
  else {
    const stmt = await db.prepare('select n.* from news n inner join admin a on a.id = n.admin_id where a.cabang_id = ?').bind(admin.cabang_id).all()
    return stmt.results as unknown as Berita[]
  }
})
