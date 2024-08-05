import { TimeSpan } from 'oslo'
import { createJWT } from 'oslo/jwt' // https://oslo.js.org/reference/jwt/createJWT

export default defineEventHandler(async (event) => {
  const db = event.context.cloudflare.env.DB

  const {
    email,
    password,
  }: {
    email: string
    password: string
  } = await readBody(event)

  const admin = await db.prepare('select * from admin where email = ?').bind(email).first()

  if (!admin) {
    setResponseStatus(event, 401)
    return 'Invalid username'
  }
  else if (admin.password !== password) {
    setResponseStatus(event, 401)
    return 'Invalid password'
  }

  const payload = {
    id: admin.id,
  }
  const token = await createJWT('HS256', jwtSecret, payload, {
    expiresIn: new TimeSpan(30, 'd'),
  })

  return {
    admin,
    token,
  }
})
