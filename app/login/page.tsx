"use client";

import { createClient } from "@/lib/supabase.client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          hd: "iiitdmj.ac.in",
        },
      },
    });

    if (error) {
      console.error("Authentication error:", error.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            You Deserve One
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Secure, anonymous matching for IIITDMJ.
          </p>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign in with Institute Email
        </button>
      </div>
    </div>
  );
}
