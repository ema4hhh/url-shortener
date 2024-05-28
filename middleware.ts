import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from './utils/supabase/middleware'
import { createClient } from './utils/supabase/server'

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/app/create')) {
    return await updateSession(request)
  }

  const shortUrl = request.nextUrl.pathname.split('/', 2)[1]

  if (shortUrl !== undefined && shortUrl !== 'app') {
    const supabase = createClient();

    const longUrl = await supabase.from('urls').select('long_url').eq('short_url', shortUrl).single()

    if (longUrl.data !== null) {
      return NextResponse.redirect(longUrl.data.long_url)
    }
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}