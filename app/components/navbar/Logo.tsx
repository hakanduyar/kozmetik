"use client"
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div className="px-1 md:px-2 py-1 cursor-pointer">
        <span className="font-bold text-lg md:text-2xl text-pink-500">Kozmetik</span>
        <span className="text-xs md:text-sm text-black">.com</span>
      </div>
    </Link>
  );
};

export default Logo;