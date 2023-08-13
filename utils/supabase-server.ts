// Supabase Client
import { headers, cookies } from 'next/headers'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../utils/database.types'

export const createClient = () =>
  createPagesBrowserClient<Database>({
    headers,
    cookies,
  })
