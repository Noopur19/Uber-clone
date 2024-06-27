import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "hi"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/ride", "/drive", "/business", "/login", "/eats/:path*", "/recipes", "/about", '/','/(hi|en)/:path*'],
};




