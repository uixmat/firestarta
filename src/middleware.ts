import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from '@/lib/intl/navigation';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localeDetection: false,
  localePrefix,
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|fr|en)/:path*']
};
