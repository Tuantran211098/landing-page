import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
export const metadata = {
  title: "Trang chủ | BẠCH LONG MOBILE",
  description:
    "Công ty BẠCH LONG MOBILE chuyên cung cấp sản phẩm chất lượng cao.",
  keywords: "công ty BẠCH LONG MOBILE, sản phẩm chất lượng, thương mại điện tử",
  openGraph: {
    title: "Trang chủ | Công ty BẠCH LONG MOBILE",
    description:
      "Công ty BẠCH LONG MOBILE chuyên cung cấp sản phẩm chất lượng cao.",
    url: "https://bachlongmobile.com",
    siteName: "Công ty BẠCH LONG",
    images: [
      {
        url: "https://bachlongmobile.com/assets/images/logo/logo-website-1.png", // Ảnh hiển thị khi chia sẻ link
        width: 1200,
        height: 630,
        alt: "Hình ảnh đại diện",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trang chủ | Công ty BẠCH LONG",
    description: "Công ty BẠCH LONG chuyên cung cấp sản phẩm chất lượng cao.",
    images: [
      "https://bachlongmobile.com/assets/images/logo/logo-website-1.png",
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
function QueryProvider({ children }: { children: ReactNode }) {
  "use client"; // Client Component

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
