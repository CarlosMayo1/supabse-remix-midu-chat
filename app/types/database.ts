export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {
          content: string | null
          created_at: string | null
          id: string
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: string
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
