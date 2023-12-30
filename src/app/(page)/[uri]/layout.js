import Header from "@/components/Header";
import { Lato } from "next/font/google";
import "../../globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Lynks | Connecting Your Social World!",
  description:
    "Lynks simplifies your online presence, providing a unified platform to effortlessly share all your social media links. Connect with ease and make a lasting impression.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
