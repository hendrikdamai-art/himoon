import { NextResponse } from "next/server";
import { buildLlmsFullTxt } from "@/lib/seo/llms";
import { LLMS_CACHE_CONTROL } from "@/lib/seo/constants";

export const dynamic = "force-static";

export function GET() {
  return new NextResponse(buildLlmsFullTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": LLMS_CACHE_CONTROL,
    },
  });
}
