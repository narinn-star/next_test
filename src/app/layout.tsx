import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar bg-white p-5">
          <Link href="/" className="mr-3 no-underline">
            홈
          </Link>
          <Link href="/mypage" className="mr-3 no-underline">
            마이페이지
          </Link>
          <Link href="/mypage/login" className="mr-3 no-underline">
            로그인
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
