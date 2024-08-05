export default (buffer: Buffer): string => {
  const base64String = buffer.toString('base64url')
  return `data:image/png;base64,${base64String}`
}
