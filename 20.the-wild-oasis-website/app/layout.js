import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <mani>{children}</mani>
        <footer>The Copyright by the Wild Oasis</footer>
      </body>
    </html>
  );
}
