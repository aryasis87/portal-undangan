export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://portal-undangan.vercel.app/sitemap.xml",
    host: "https://portal-undangan.vercel.app",
  };
}
