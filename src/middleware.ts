import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'uk'] as const;
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1) skip service prefixes Next
  if (pathname.startsWith('/_next') || pathname.startsWith('/api')) return;

  // 2) static files (.ico, .png …)
  if (/\.[\w]{2,5}$/i.test(pathname)) return;

  // 3) already has /en or /uk
  if (locales.some((loc) => pathname.startsWith(`/${loc}`))) return;

  // 4) redirect root and all other paths
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url),
  );
}

export const config = { matcher: ['/', '/(.*)'] };
