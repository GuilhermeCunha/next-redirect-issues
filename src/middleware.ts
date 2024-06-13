import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  console.debug(`[MIDDLEWARE]`, {
    req: {
      url: req.url,
    },
    nextUrl: {
      url: req.nextUrl.href,
      host: req.nextUrl.hostname,
    },
    headers: {
      host: req.headers.get("x-forwarded-host"),
      fowardHost: req.headers.get("host"),
    },
  });

  if (req.nextUrl.pathname === "/redirect/using-middleware") {
    const destination = new URL("/", req.url);

    console.debug(`[URL] [using-middleware] urls`, {
      req: {
        url: req.url,
      },
      nextUrl: {
        url: req.nextUrl.href,
        host: req.nextUrl.hostname,
      },
      headers: {
        host: req.headers.get("x-forwarded-host"),
        fowardHost: req.headers.get("host"),
      },
    });

    console.debug("Redirecting to", destination.toString());
    return NextResponse.redirect(destination);
  }
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
