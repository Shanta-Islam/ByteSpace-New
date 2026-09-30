import Link from "next/link";
import Image from "next/image";

interface ByteSpaceLogoProps {
  className?: string;
  showText?: boolean;
  theme?: "light" | "dark";
}

export default function ByteSpaceLogo({
  className = "",
  showText = true,
  theme = "light",
}: ByteSpaceLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group select-none ${className}`}
      aria-label="ByteSpace Home"
    >
      {/* Logo */}

      <Image
        src="/images/logo.svg"
        alt="ByteSpace"
        width={26}
        height={26}
        className="transition-transform duration-200 group-hover:scale-105"
        priority
      />

      {/* Wordmark */}
      {showText && (
        <span
          className={`font-extrabold text-[22px] tracking-tight font-heading ${theme === "dark" ? "text-gray-950" : "text-white"
            }`}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}
