import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh-Hans|zh-Hant|es|en|hi|bn|pt|ru|ja|pa|de|jv|wuu|mr|te|vi|ko|fr|ta|ur|tr)/:path*']
};
