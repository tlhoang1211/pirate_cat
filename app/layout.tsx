import localFont from "next/font/local";
import "../app/styles/globals.css";

const happySchoolTtf = localFont({
  src: "../public/assets/fonts/Happy_School.ttf",
  variable: "--font-hs-ttf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${happySchoolTtf.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
