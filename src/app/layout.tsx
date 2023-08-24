"use client";
import config from "@/config/config.json";
import theme from "@/config/theme.json";
import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "@/styles/main.scss";
import { AuthProvider } from "./provider";
import { usePathname } from "next/navigation";
import ScrollToTopButton from "@/components/scrollToTopButton";
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

        {/* favicon */}
        <link rel="shortcut icon" href={config.site.favicon} />
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
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCLgzxMVWNCYs0IjGBx2LGjaCTT2i9zxPo&libraries=places`}
          defer
          async
        ></script>
        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${
            sf ? "&family=" + sf : ""
          }&display=swap`}
          rel="stylesheet"
        />
      </head>

      <body suppressHydrationWarning={true}>
        <ScrollToTopButton />
        <Provider store={store}>
          <AuthProvider>
            {pathname !== "/admin" && <Header />}
            <main>{children}</main>
            {pathname !== "/admin" && <Footer />}
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
