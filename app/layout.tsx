import "../styles/global.css";

import { Inter } from "next/font/google";

const interFont = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={interFont.className}>
      <body className="flex items-center justify-center">
        <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12">{children}</div>
      </body>
    </html>
  );
}
