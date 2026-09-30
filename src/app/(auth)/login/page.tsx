"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ByteSpaceLogo from "@/components/shared/ByteSpaceLogo";

const STUDENT_AVATARS = [
  "/images/avatars/student-1.png",
  "/images/avatars/student-2.png",
  "/images/avatars/student-3.png",
  "/images/avatars/student-4.png",
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", email);
  };

  return (
    <div className="relative w-full min-h-screen bg-primary overflow-hidden flex flex-col justify-between selection:bg-lime-brand selection:text-black">
      {/* Seamless Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none bg-blueprint-grid opacity-90"
        aria-hidden="true"
      />

      {/* Top Logo Header */}
      <header className="relative z-30 max-w-[1240px] w-full mx-auto  px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 ">
        <Link href="/" className="inline-block">
          <ByteSpaceLogo theme="light" showText={false} />
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="relative z-20 max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex flex-col justify-start pt-2">
            <h2 className="text-[#f5f5f6] font-semibold text-[20px] font-heading">
              Sign in with ease
            </h2>

            <p className="mt-2 text-[#f5f5f6] text-[14px] sm:text-[15px] lg:text-[18px] max-w-[440px] leading-relaxed font-body">
              Experience a seamless and efficient sign-in process that grants you
              instant access to a world of knowledge.
            </p>

            {/* Graphic */}
            <div className="relative w-full max-w-[460px] h-[620px] select-none pointer-events-none mt-10">
              <Image
                src="/images/auth/img.svg"
                alt="Sign in illustration"
                fill
                className="object-contain object-top"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end pt-2">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 lg:p-12 w-full max-w-[460px] shadow-2xl">
              <span className="text-primary font-semibold text-xs sm:text-lg block mb-1">
                Sign In
              </span>

              <h1 className="text-[#242528] font-semibold text-[30px] sm:text-[34px] lg:text-[44px] font-heading leading-tight tracking-tight mb-7">
                Welcome Back
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-[#242528] mb-1.5"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="designer@example.com"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#82868e] placeholder:text-gray-400 outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs sm:text-sm font-medium text-[#242528] mb-1.5"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#82868e] placeholder:text-gray-400 outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Button */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="bg-lime-brand hover:bg-[#c5ec19] active:scale-[0.98] transition-all text-[#242528] font-medium text-lg px-8 py-2.5 rounded-3xl shadow-xs cursor-pointer"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="my-7 relative flex items-center justify-center">
                <div className="border-t border-gray-200 w-full" />
                <span className="bg-white px-3 text-xs text-gray-400 absolute font-body">
                  Or
                </span>
              </div>

              {/* Social */}
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  aria-label="Sign in with Facebook"
                  className="w-14 h-14 rounded-3xl border border-[#d1d1d1] hover:border-gray-300 hover:bg-gray-50 flex items-center justify-center text-gray-800 transition-all cursor-pointer shadow-2xs"
                >
                  {/* <FaFacebookF className="w-4 h-4" /> */}
                  <Image
                    src="/images/auth/fb.png"
                    alt="facebook"
                    width={25}
                    height={25}
                    className=""
                  />
                </button>

                <button
                  type="button"
                  aria-label="Sign in with Google"
                  className="w-14 h-14 rounded-3xl border border-[#d1d1d1] hover:border-gray-300 hover:bg-gray-50 flex items-center justify-center text-gray-800 transition-all cursor-pointer shadow-2xs"
                >
                  <Image
                    src="/images/auth/google.png"
                    alt="google"
                    width={25}
                    height={25}
                    className=""
                  />
                </button>
              </div>

              {/* Register */}
              <p className="mt-8 text-center text-xs sm:text-[16px] text-[#888] font-body">
                New user?{" "}
                <Link
                  href="/register"
                  className="text-primary hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Subtle Padding */}
      <footer className="relative z-20 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} ByteSpace. All rights reserved.
      </footer>
    </div>
  );
}
