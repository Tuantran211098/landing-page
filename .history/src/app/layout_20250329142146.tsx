import { ReactNode } from "react";
import QueryProvider from "@/components/QueryProvider";

export const metadata = {
  title: "Trang chủ | BẠCH LONG MOBILE",
  description:
    "Công ty BẠCH LONG MOBILE chuyên cung cấp sản phẩm chất lượng cao.",
  keywords: "công ty BẠCH LONG MOBILE, sản phẩm chất lượng, thương mại điện tử",
  icons: {
    icon: "https://bachlongmobile.com/assets/images/logo/logo-website-1.png",
  },
  openGraph: {
    title: "Trang chủ | BẠCH LONG MOBILE",
    description:
      "Công ty BẠCH LONG MOBILE chuyên cung cấp sản phẩm chất lượng cao.",
    url: "https://bachlongmobile.com",
    siteName: "BẠCH LONG MOBILE",
    images: [
      {
        url: "https://bachlongmobile.com/assets/images/logo/logo-website-1.png",
        width: 1200,
        height: 630,
        alt: "Logo Bạch Long Mobile",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trang chủ | BẠCH LONG MOBILE",
    description:
      "Công ty BẠCH LONG MOBILE chuyên cung cấp sản phẩm chất lượng cao.",
    images: [
      "https://bachlongmobile.com/assets/images/logo/logo-website-1.png",
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <QueryProvider>{children}</QueryProvider>{" "}
      </body>
    </html>
  );
}
