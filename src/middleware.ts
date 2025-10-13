import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define routes that need extra protection
const ADMIN_ROUTES = [
  '/admin',
  '/config',
  '/settings'
]

// Define routes that are always accessible (even without auth)
const PUBLIC_ROUTES = [
  '/login',
  '/public'
]

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const pathname = url.pathname
  
  // Allow public routes
  if (PUBLIC_ROUTES.some(route => pathname.startsWith(route))) {
    return NextResponse.next()
  }
  
  // Check for admin routes - these might need special handling in the future
  if (ADMIN_ROUTES.some(route => pathname.startsWith(route))) {
    // For now, let the AuthWrapper handle it, but we could add admin-specific logic here
    const response = NextResponse.next()
    response.headers.set('X-Admin-Route', 'true')
    return response
  }
  
  // Add security headers to all routes
  const response = NextResponse.next()
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), location=()')
  
  // Add cache control for sensitive pages
  if (!pathname.startsWith('/public/') && !pathname.startsWith('/_next/')) {
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
  }
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}