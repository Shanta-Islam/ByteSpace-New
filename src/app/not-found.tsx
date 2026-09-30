import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export default function NotFound() {
  return (
    <main
      className={`${poppins.className} relative flex min-h-screen items-center justify-center overflow-hidden bg-[#043ce0] px-5`}
    >
      {/* Blueprint grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-size-[56px_56px] md:bg-size-[80px_80px] lg:bg-size-[100px_100px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-center text-center">
        {/* 404 — lime fading into the background */}
        <h1
          aria-label="404"
          className="select-none bg-clip-text text-[130px] font-bold leading-[0.8] tracking-[-0.03em] text-transparent sm:text-[200px] md:text-[280px] lg:text-[480px]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #d9ff2e 0%, #c9f52a 35%, rgba(190,235,60,0.55) 70%, rgba(190,235,60,0.05) 100%)",
          }}
        >
          404
        </h1>

        {/* Heading (overlaps the faded bottom of the 404) */}
        <h2 className="relative -mt-12 lg:-mt-42 max-w-85 text-[72px] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:-mt-5 sm:max-w-none sm:text-[40px] md:-mt-8 md:text-[52px] lg:text-[72px]">
          The page you are looking
          <br />
          for doesn’t exist
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-80 text-[18px] font-normal text-[#e5e6e8] sm:mt-5 sm:max-w-none sm:text-[13px] md:mt-6 md:text-[14px] lg:mt-8 lg:text-[16px]">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-lime-brand px-6 py-2.5 text-[18px] font-medium text-[#242528] transition-all duration-200 hover:scale-105 hover:bg-[#d4ff4d] active:scale-95 md:mt-6 md:px-8 md:py-3 md:text-[14px] lg:mt-8 lg:px-10 lg:py-3.5 lg:text-[16px]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}