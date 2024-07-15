import type { Metadata } from "next";
import {Roboto_Mono, Space_Mono, Ubuntu_Mono} from "next/font/google";
import "./globals.css";
import GridBackground from "@/components/GridBackground";
import {cn} from "@/lib/utils";

const font = Ubuntu_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Printable CV",
  description: "Generated by A. Göktuğ Yalçın",
  icons: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📝</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
      <GridBackground
          width={30}
          height={30}
          x={-10}
          y={-10}
          className={cn(
              '[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] -z-1'
          )}
      />
        {children}
      </body>
    </html>
  );
}
