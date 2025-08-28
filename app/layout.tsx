import type { Metadata } from "next";


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
    <html lang="fr">
      <body className="main-body">
        <header>
          <nav>
            <ul>
              <li>Acceuil</li>
              <li>Mes compétences</li>
              <li>Mes projets</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
