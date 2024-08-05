export default function isValidPhoneNumber(phoneNumber: string): boolean {
  // Cek apakah semua karakter adalah angka
  const allDigits = phoneNumber.match(/^\d+$/)
  if (!allDigits) {
    return false
  }

  // Cek panjang nomor telepon
  const length = phoneNumber.length
  if (length < 10 || length > 14) {
    return false
  }

  // Jika semua kondisi terpenuhi, nomor telepon valid
  return true
}
