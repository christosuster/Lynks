import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import HeroForm from "@/components/forms/HeroForm";
import { User } from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <section className="pt-16">
        <div className="max-w-xl mb-8">
          <h1 className="text-6xl font-bold text-slate-900">
            Everything you are.
            <br />
            In one, simple link in bio.
          </h1>
          <h2 className="text-slate-600 text-xl mt-6 max-w-md">
            Thousands of people use Lynks for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </h2>
        </div>
        <HeroForm user={session?.user} />
      </section>
    </main>
  );
}
