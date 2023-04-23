export const config = {
  matcher: '/((?!needhelp).*)',
};

export default function middleware(request) {
  if ((!request.headers.has('Referer') && request.headers.get('Sec-Fetch-Site') !== 'cross-site') || request.headers.get('Referer') === 'https://electo.gq/') {
    return Response.redirect(new URL('/needhelp', request.url));
  }

  return;
}