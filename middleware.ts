import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/lib/i18n-config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If the path does not start with /en or /uk
  const missingLocale = i18n.locales.every(
    (loc) => !pathname.startsWith(`/${loc}`),
  );

  if (missingLocale) {
    return NextResponse.redirect(
      new URL(`/${i18n.defaultLocale}${pathname}`, request.url),
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // all except static files and API
};
