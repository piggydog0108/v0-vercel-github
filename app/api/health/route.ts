import { NextResponse } from 'next/server'

// GET /api/health — confirms env is set and the Supabase project answers.
export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) {
    return NextResponse.json({ ok: false, error: 'Supabase env not set' }, { status: 500 })
  }
  try {
    const res = await fetch(`${url}/auth/v1/settings`, { headers: { apikey: key }, cache: 'no-store' })
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: `Supabase responded ${res.status}` }, { status: 502 })
    }
    return NextResponse.json({ ok: true, error: null })
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 502 })
  }
}
