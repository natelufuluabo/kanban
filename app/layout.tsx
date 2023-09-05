import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import RecoilContextProvider from "./recoilContextProvider";

const inter = Inter({ subsets: ['latin'] });
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'kanban',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='icon' href='./K.jpg' />
      </head>
      <body className={inter.className}>
        <RecoilContextProvider>
          {children}
        </RecoilContextProvider>
      </body>
    </html>
  )
}
