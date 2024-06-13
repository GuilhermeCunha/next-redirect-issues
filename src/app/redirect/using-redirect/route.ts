import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const GET = (req: NextRequest) => {
  const url = new URL(req.url);

  const queryParams = url.searchParams.toString();

  console.debug(`[URL] [using-redirect] urls`, {
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

  if (queryParams) {
    return redirect(`/?${queryParams}`);
  }

  return redirect("/");
};
