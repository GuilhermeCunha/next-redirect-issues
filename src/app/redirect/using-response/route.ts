import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  const destination = new URL("/", req.url);

  console.debug(`[URL] [using-response] urls`, {
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

  return NextResponse.redirect(destination);
};
