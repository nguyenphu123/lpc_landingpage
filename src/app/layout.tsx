"use client";
import config from "@/config/config.json";
import theme from "@/config/theme.json";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "@/styles/main.scss";
import { AuthProvider } from "./provider";
import { usePathname } from "next/navigation";

import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/partials/Header"));
const Footer = dynamic(() => import("@/partials/Footer"));
const ScrollToTopButton = dynamic(
  () => import("@/components/scrollToTopButton"),
);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  const pathname = usePathname();
  return (
    <html suppressHydrationWarning={true} lang="en">
      <head>
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/demo/image/upload/turtles.jpg"
        />
        {/* favicon */}
        <link rel="shortcut icon preload" href={config.site.favicon} />
        {/* theme meta */}
        <meta name="theme-name" content="nextplate" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
        <script
          rel=" preload "
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCLgzxMVWNCYs0IjGBx2LGjaCTT2i9zxPo&libraries=places`}
          defer
          async
        ></script>
        {/* google font css */}
        {/* <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        /> */}
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${
            sf ? "&family=" + sf : ""
          }&display=swap`}
          rel="stylesheet preload preconnect"
        />
      </head>

      <body suppressHydrationWarning={true}>
        <ScrollToTopButton />
        <Provider store={store}>
          <AuthProvider>
            {pathname == "/admin" || pathname == "/login" ? <></> : <Header />}
            <main>{children}</main>
            {pathname == "/admin" || pathname == "/login" ? <></> : <Footer />}
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
export const metadata = {
  title: "lpc",
  description: "lpc website",
  metadataBase: new URL("logo.png"),
};
