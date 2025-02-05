"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-[#7510F7] text-2xl font-bold">
          <span className="sr-only">Matt Farley</span>
          <Image src="/logo.png" alt="Logo" width={48} height={48} />
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="#contact">
            <Button className="bg-[#7510F7] hover:bg-[#6209e5] text-white">
              Say Hello
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
