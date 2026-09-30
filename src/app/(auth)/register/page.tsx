"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ByteSpaceLogo from "@/components/shared/ByteSpaceLogo";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Registering with:", {
      name,
      email,
      password,
    });
  };

  return (
    <div className="relative w-full min-h-screen bg-primary overflow-hidden flex flex-col justify-between selection:bg-lime-brand selection:text-black">

      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 pointer-events-none bg-blueprint-grid opacity-90"
        aria-hidden="true"
      />

      {/* Logo */}
      <header className="relative z-30 max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <Link href="/" className="inline-block">
          <ByteSpaceLogo theme="light" showText={false} />
        </Link>
      </header>

      {/* Main */}
      <main className="relative z-20 max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT */}
          <div className="lg:col-span-6 flex flex-col justify-start pt-2">

            <h2 className="text-[#f5f5f6] font-semibold text-[20px] font-heading">
              Sign up and come in
            </h2>

            <p className="mt-2 text-[#f5f5f6] text-[14px] sm:text-[15px] lg:text-[18px] max-w-[440px] leading-relaxed font-body">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
            </p>

            {/* Illustration */}
            <div className="relative w-full max-w-[460px] h-[620px] select-none pointer-events-none mt-10">
              <Image
                src="/images/auth/img.svg"
                alt="Create account illustration"
                fill
                className="object-contain object-top"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end pt-2">

            <div className="bg-white rounded-[32px] p-8 sm:p-10 lg:p-12 w-full max-w-[460px] shadow-2xl">

              {/* Title */}
              <span className="text-primary font-semibold text-xs sm:text-lg block mb-1">
                Create an Account
              </span>

              <h1 className="text-[#242528] font-semibold text-[30px] sm:text-[34px] lg:text-[44px] font-heading leading-tight tracking-tight mb-7">
                Welcome to ByteSpace
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-[#242528] mb-1.5"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jamie devis"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#242528] placeholder:text-gray-400 outline-none focus:border-primary transition-colors"
                  />
                </div>

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
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#242528] placeholder:text-gray-400 outline-none focus:border-primary transition-colors"
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
                    minLength={6}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#242528] placeholder:text-gray-400 outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Button */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="bg-lime-brand hover:bg-[#c5ec19] active:scale-[0.98] transition-all text-[#242528] font-medium text-lg px-8 py-2.5 rounded-3xl shadow-xs cursor-pointer"
                  >
                    Continue
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

                {/* Facebook */}
                <button
                  type="button"
                  aria-label="Sign up with Facebook"
                  className="w-14 h-14 rounded-3xl border border-[#d1d1d1] hover:border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                >
                  <Image
                    src="/images/auth/fb.png"
                    alt="Facebook"
                    width={25}
                    height={25}
                  />
                </button>

                {/* Google */}
                <button
                  type="button"
                  aria-label="Sign up with Google"
                  className="w-14 h-14 rounded-3xl border border-[#d1d1d1] hover:border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                >
                  <Image
                    src="/images/auth/google.png"
                    alt="Google"
                    width={25}
                    height={25}
                  />
                </button>
              </div>

              {/* Login */}
              <p className="mt-8 text-center text-xs sm:text-[16px] text-[#888] font-body">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary  hover:underline"
                >
                  Login
                </Link>
              </p>

            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} ByteSpace. All rights reserved.
      </footer>
    </div>
  );
}
