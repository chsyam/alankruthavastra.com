// Set NEXT_PUBLIC_SITE_URL to the live domain (e.g. https://alankruthavastra.com).
// On Vercel the production URL is picked up automatically.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteName = "Alankrutha Vastra";

export const siteDescription =
  "Alankrutha Vastra is a women's fashion boutique for handpicked sarees, elegant women's wear, girls' fashion, boutique collections and accessories. Opening soon.";
