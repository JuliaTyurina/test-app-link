import "./styles/globals.scss";

export const metadata = {
  title: "Line",
  description: "Test exercise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      { children }
    </html>
  );
}
