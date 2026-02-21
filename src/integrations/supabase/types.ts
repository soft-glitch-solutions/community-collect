export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      collections: {
        Row: {
          actual_earnings: number | null
          collector_id: string
          completed_at: string | null
          created_at: string | null
          estimated_earnings: number | null
          household_id: string
          id: string
          notes: string | null
          scheduled_date: string
          status: string | null
          total_weight_kg: number | null
        }
        Insert: {
          actual_earnings?: number | null
          collector_id: string
          completed_at?: string | null
          created_at?: string | null
          estimated_earnings?: number | null
          household_id: string
          id?: string
          notes?: string | null
          scheduled_date: string
          status?: string | null
          total_weight_kg?: number | null
        }
        Update: {
          actual_earnings?: number | null
          collector_id?: string
          completed_at?: string | null
          created_at?: string | null
          estimated_earnings?: number | null
          household_id?: string
          id?: string
          notes?: string | null
          scheduled_date?: string
          status?: string | null
          total_weight_kg?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "collections_collector_id_fkey"
            columns: ["collector_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collections_household_id_fkey"
            columns: ["household_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      collector_applications: {
        Row: {
          applied_at: string | null
          area: string
          id: string
          motivation: string
          reviewed_at: string | null
          status: string | null
          user_id: string
        }
        Insert: {
          applied_at?: string | null
          area: string
          id?: string
          motivation: string
          reviewed_at?: string | null
          status?: string | null
          user_id: string
        }
        Update: {
          applied_at?: string | null
          area?: string
          id?: string
          motivation?: string
          reviewed_at?: string | null
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "collector_applications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      logged_items: {
        Row: {
          collected: boolean | null
          collection_id: string | null
          estimated_weight_kg: number | null
          household_id: string
          id: string
          logged_at: string | null
          notes: string | null
          quantity: number | null
          recyclable_type_id: string
        }
        Insert: {
          collected?: boolean | null
          collection_id?: string | null
          estimated_weight_kg?: number | null
          household_id: string
          id?: string
          logged_at?: string | null
          notes?: string | null
          quantity?: number | null
          recyclable_type_id: string
        }
        Update: {
          collected?: boolean | null
          collection_id?: string | null
          estimated_weight_kg?: number | null
          household_id?: string
          id?: string
          logged_at?: string | null
          notes?: string | null
          quantity?: number | null
          recyclable_type_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "logged_items_household_id_fkey"
            columns: ["household_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "logged_items_recyclable_type_id_fkey"
            columns: ["recyclable_type_id"]
            isOneToOne: false
            referencedRelation: "recyclable_types"
            referencedColumns: ["id"]
          },
        ]
      }
      recyclable_types: {
        Row: {
          active: boolean | null
          created_at: string | null
          description: string | null
          estimated_price_per_kg: number | null
          icon_name: string | null
          id: string
          name: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          estimated_price_per_kg?: number | null
          icon_name?: string | null
          id?: string
          name: string
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          estimated_price_per_kg?: number | null
          icon_name?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      user_onboarding: {
        Row: {
          completed_at: string | null
          created_at: string | null
          has_seen_onboarding: boolean | null
          id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          has_seen_onboarding?: boolean | null
          id?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          has_seen_onboarding?: boolean | null
          id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_onboarding_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          collector_approved: boolean | null
          created_at: string | null
          full_name: string
          id: string
          invite_code: string | null
          is_collector: boolean | null
          phone_number: string | null
          referred_by: string | null
          updated_at: string | null
        }
        Insert: {
          collector_approved?: boolean | null
          created_at?: string | null
          full_name: string
          id: string
          invite_code?: string | null
          is_collector?: boolean | null
          phone_number?: string | null
          referred_by?: string | null
          updated_at?: string | null
        }
        Update: {
          collector_approved?: boolean | null
          created_at?: string | null
          full_name?: string
          id?: string
          invite_code?: string | null
          is_collector?: boolean | null
          phone_number?: string | null
          referred_by?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_invite_code: { Args: never; Returns: string }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
