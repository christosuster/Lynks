import Header from "@/components/Header";
import { Lato } from "next/font/google";
import "../globals.css";

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
        <main className="flex flex-col min-h-screen justify-between">
          <Header />
          <div className="max-w-4xl mx-auto p-6">{children}</div>
          <footer className="border-t bg-white w-full h-full py-2  flex justify-center items-center ">
            <p>
              Developed by{" "}
              <a
                className="text-indigo-500 font-bold"
                href="https://www.christosuster.me/"
              >
                Christos Uster Biswas
              </a>
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
