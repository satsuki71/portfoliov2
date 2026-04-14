import type { Metadata } from "next";
import './layout.scss'

import { IBM_Plex_Mono, Azeret_Mono } from 'next/font/google'

const ibmPlex = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm'
})

const azeret = Azeret_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-azeret'
})

export const metadata: Metadata = {
  title: "Mon portfolio",
  description: "Portfolio généré grâce à Next.js dans le cadre de ma formation de developpement web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${ibmPlex.variable} ${azeret.variable}`}>
      <body className="main-body">
        <header>
          <nav>
            <ul>
              <li>Accueil</li>
              <li>Mes projets</li>
              <li>Mon parcours</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
