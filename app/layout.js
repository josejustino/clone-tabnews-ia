import "./globals.css";

export const metadata = {
  title: "TabNews em construção",
  description:
    "Estamos reconstruindo o TabNews, um lugar para consumir conteúdos com valor concreto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
