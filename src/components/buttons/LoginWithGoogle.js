"use client";
import { signIn } from "next-auth/react";

export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => signIn("google")}
      className="rounded-2xl hover:shadow-lg text-center w-full p-3 flex gap-3 items-center justify-center"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/256/2702/2702602.png"
        alt=""
        className="h-6 w-6"
      />
      <span>Sign In with Google</span>
    </button>
  );
}
