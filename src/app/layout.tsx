"use client";
import config from "@/config/config.json";
import theme from "@/config/theme.json";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "@/styles/main.scss";

import { AuthProvider } from "./provider";
import { usePathname } from "next/navigation";
import { MantineProvider } from "@mantine/core";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/partials/Header"), { ssr: false });
const Footer = dynamic(() => import("@/partials/Footer"), { ssr: false });
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
        <meta name="description" content="Welcome to LPC" />
        <meta property="og:url" content="https://lp.com.vn/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home page" />
        <meta property="og:description" content="Welcome to LPC" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/derjssgq9/image/upload/v1701763583/Logo_Lien_Phat_R_Daytona_Update_31.10.22_pjwlkv.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lp.com.vn" />
        <meta property="twitter:url" content="https://lp.com.vn/" />
        <meta name="twitter:title" content="Home page" />
        <meta name="twitter:description" content="Welcome to LPC" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/derjssgq9/image/upload/v1701763583/Logo_Lien_Phat_R_Daytona_Update_31.10.22_pjwlkv.png"
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

      <body tabIndex={0} suppressHydrationWarning={true}>
        <ScrollToTopButton />
        <Provider store={store}>
          <AuthProvider>
            <MantineProvider>
              {pathname == "/admin" || pathname == "/login" ? (
                <></>
              ) : (
                <Header />
              )}
              <main>{children}</main>
              {pathname == "/admin" || pathname == "/login" ? (
                <></>
              ) : (
                <Footer />
              )}
            </MantineProvider>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
