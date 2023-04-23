export const config = {
  matcher: '/((?!needhelp).*)',
};

export default function middleware(request) {
  try {
    if (request.headers.get('Referer') === 'https://electo.gq/') {
      return Response.redirect(new URL('/needhelp', request.url));
    }
  } catch (e) {
    if (request.headers.get('Sec-Fetch-Site') !== 'cross-site') return;

    return Response.redirect(new URL('/needhelp', request.url));
  }
}