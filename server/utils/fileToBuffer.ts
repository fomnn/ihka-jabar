export async function useFileToBuffer(file: File) {
  return Buffer.from(await file.arrayBuffer())
}
