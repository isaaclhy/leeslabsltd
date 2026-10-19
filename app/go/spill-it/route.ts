import { NextRequest, NextResponse } from "next/server";

const SPILL_IT_APP_ID = "6758108818";

/** App Store country codes Apple accepts in the URL path. */
const APP_STORE_COUNTRIES = new Set([
  "ae", "ag", "ai", "al", "am", "ao", "ar", "at", "au", "az", "bb", "be", "bf",
  "bg", "bh", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bw", "by", "bz", "ca",
  "cd", "cg", "ch", "ci", "cl", "cm", "cn", "co", "cr", "cv", "cy", "cz", "de",
  "dk", "dm", "do", "dz", "ec", "ee", "eg", "es", "fi", "fj", "fm", "fr", "ga",
  "gb", "gd", "ge", "gh", "gm", "gr", "gt", "gw", "gy", "hk", "hn", "hr", "hu",
  "id", "ie", "il", "in", "iq", "is", "it", "jm", "jo", "jp", "ke", "kg", "kh",
  "kn", "kr", "kw", "ky", "kz", "la", "lb", "lc", "lk", "lr", "lt", "lu", "lv",
  "ly", "ma", "md", "me", "mg", "mk", "ml", "mm", "mn", "mo", "mr", "ms", "mt",
  "mu", "mv", "mw", "mx", "my", "mz", "na", "ne", "ng", "ni", "nl", "no", "np",
  "nz", "om", "pa", "pe", "pg", "ph", "pk", "pl", "pt", "pw", "py", "qa", "ro",
  "rs", "ru", "rw", "sa", "sb", "sc", "se", "sg", "si", "sk", "sl", "sn", "sr",
  "st", "sv", "sz", "tc", "td", "th", "tj", "tm", "tn", "to", "tr", "tt", "tw",
  "tz", "ua", "ug", "us", "uy", "uz", "vc", "ve", "vg", "vn", "vu", "ws", "xk",
  "ye", "za", "zm", "zw",
]);

function resolveCountry(request: NextRequest): string | null {
  const vercelCountry = request.headers.get("x-vercel-ip-country");
  if (vercelCountry) {
    const code = vercelCountry.toLowerCase();
    if (APP_STORE_COUNTRIES.has(code)) return code;
  }

  // Cloudflare / other CDNs
  const cfCountry = request.headers.get("cf-ipcountry");
  if (cfCountry && cfCountry !== "XX") {
    const code = cfCountry.toLowerCase();
    if (APP_STORE_COUNTRIES.has(code)) return code;
  }

  return null;
}

export function GET(request: NextRequest) {
  const country = resolveCountry(request);

  // Country-specific when we know it; otherwise Apple's generic URL still
  // redirects to the visitor's App Store storefront.
  const url = country
    ? `https://apps.apple.com/${country}/app/id${SPILL_IT_APP_ID}`
    : `https://apps.apple.com/app/id${SPILL_IT_APP_ID}`;

  return NextResponse.redirect(url, 302);
}
