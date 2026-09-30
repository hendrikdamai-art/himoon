import { NextResponse } from "next/server";
import { buildLlmsFullTxt, LLMS_CONTENT_TYPE } from "@/lib/seo/llms";
import { LLMS_CACHE_CONTROL } from "@/lib/seo/constants";

export const dynamic = "force-static";

export function GET() {
  return new NextResponse(buildLlmsFullTxt(), {
    headers: {
      "Content-Type": LLMS_CONTENT_TYPE,
      "Cache-Control": LLMS_CACHE_CONTROL,
      Link: '</llms.txt>; rel="describedby"',
    },
  });
}
