export interface Admin {
  id: number
  email: string
  password: string
  name: string | null
  member_id: string | null
  no_telp: string | null
  cabang_id: number | null
  is_admin_daerah: boolean
  is_moderator: boolean
  is_active: boolean
  created_at: Date | null
}

export interface FormDataAddAdmin {
  email: string
  password: string
  name: string
  cabangId: undefined
  isModerator: boolean
  isAdminDaerah: boolean
}
