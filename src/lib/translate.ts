// Google Translate stores the chosen language in a "googtrans" cookie. Google
// writes its own copy on the root domain (.lynhsdrinks.com), so switching back
// to English has to clear every copy, not just ours.

const COOKIE = "googtrans";
const VIETNAMESE = "/en/vi";

// Every domain a googtrans cookie could live on: none (host-only), the host,
// and each parent domain with a leading dot.
function cookieDomains() {
  const parts = window.location.hostname.split(".");
  const domains: (string | null)[] = [null];
  for (let i = 0; i < parts.length - 1; i++) {
    const d = parts.slice(i).join(".");
    domains.push(d, `.${d}`);
  }
  return domains;
}

export function isVietnamese() {
  return document.cookie
    .split("; ")
    .some((c) => c === `${COOKIE}=${VIETNAMESE}` || c === `${COOKIE}=${encodeURIComponent(VIETNAMESE)}`);
}

export function setVietnamese() {
  clearLanguage();
  document.cookie = `${COOKIE}=${VIETNAMESE}; path=/`;
}

export function clearLanguage() {
  const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  for (const d of cookieDomains()) {
    document.cookie = `${COOKIE}=; ${expired}; path=/${d ? `; domain=${d}` : ""}`;
  }
}
