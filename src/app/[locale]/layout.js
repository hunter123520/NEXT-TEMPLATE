import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./Styles/App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/HomePage.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./Styles/Fonts.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';

export default async function LocaleLayout({
  children,
  params
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Sellami Mohammed Abdelhadi</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
        <Header/>
        {children}
        <Footer/>
        </NextIntlClientProvider>
        
      </body>
    </html>);
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <title>Sellami Mohammed Abdelhadi</title>
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//          <I18nInitializer />
//         <Header/>
//         {children}
//         <Footer/>
        
//       </body>
//     </html>
//   );
// }
