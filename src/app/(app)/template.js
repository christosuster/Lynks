import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AppSidebar from "@/components/layout/AppSidebar";
import { Page } from "@/models/Page";
import { faBars, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { Lato } from "next/font/google";
import "../globals.css";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Lynks | Connecting Your Social World!",
  description:
    "Lynks simplifies your online presence, providing a unified platform to effortlessly share all your social media links. Connect with ease and make a lasting impression.",
};

export default async function AppTemplate({ children, ...rest }) {
  const headersList = headers();
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }
  mongoose.connect(process.env.MONGO_URI);
  const page = await Page.findOne({ owner: session.user.email });
  return (
    <html lang="en">
      <body className={lato.className}>
        <Toaster />
        <main className="md:flex h-screen">
          <label
            htmlFor="navCb"
            className="md:hidden ml-8 mt-4 p-4 rounded-md bg-white shadow inline-flex items-center gap-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faBars} />
            <span>Open navigation</span>
          </label>
          <input id="navCb" type="checkbox" className="hidden" />
          <label
            htmlFor="navCb"
            className="hidden backdrop fixed inset-0 bg-black/80 z-10"
          ></label>
          <aside className="bg-white w-48 p-4 pt-6 shadow fixed md:static -left-48 top-0 bottom-0 z-20 transition-all">
            <div className="sticky top-0 pt-2 h-full">
              <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto">
                <Image
                  src={session.user.image}
                  width={256}
                  height={256}
                  alt={"avatar"}
                />
              </div>
              {page && (
                <Link
                  target="_blank"
                  href={"/" + page.uri}
                  className="text-center mt-4 flex gap-1 items-center justify-center"
                >
                  <FontAwesomeIcon
                    size="lg"
                    icon={faLink}
                    className="text-indigo-500"
                  />
                  <span className="text-xl text-gray-300">/</span>
                  <span className="text-indigo-500">{page.uri}</span>
                </Link>
              )}
              <div className="text-center">
                <AppSidebar />
              </div>
              <footer className="border-t bg-white w-full py-2  flex justify-center items-center text-center absolute bottom-0">
                <p>
                  Developed by <br />
                  <a
                    className="text-indigo-500 font-bold"
                    href="https://www.christosuster.me/"
                  >
                    Christos Uster Biswas
                  </a>
                </p>
              </footer>
            </div>
          </aside>
          <div className="grow overflow-y-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
