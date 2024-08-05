export const getDb = (event: any): D1Database => {
  return event.context.cloudflare.env.DB
}
