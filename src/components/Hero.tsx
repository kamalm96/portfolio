"use client";
import Image from "next/image";
import avatar from "../../public/linkedin.png";

interface HeroProps {
  title: string;
  description: string;
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <section className="bg-white pt-48 h-screen">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-[#1E1F4B] text-5xl font-bold mb-6 max-w-4xl mx-auto">
          {title}
        </h1>
        <p className="text-xl text-[#1E1F4B] mb-16">{description}</p>
        <div className="relative mb-12">
          <Image
            src={avatar}
            alt="Kamal M avatar"
            width={400}
            height={400}
            className="mx-auto mb-4"
            priority
          />

        </div>
      </div>
    </section>
  );
}
