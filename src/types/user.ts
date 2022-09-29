export interface UserInfo {
  user_id: string
  username: string
  full_name?: string
  biography?: string
  email?: string
  profile_pic_url?: string
  follower_count?: number
  follow_count?: number
}

export interface UserParams {
  user_id: string
  username: string
}