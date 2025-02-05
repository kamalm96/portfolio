"use client";
import Image from "next/image";
import avatar from "../../public/avatar.svg";
import devices from "../../public/devices.svg";

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
            alt="Matt Farley avatar"
            width={170}
            height={170}
            className="mx-auto mb-4"
            priority
          />
          <Image
            src={devices}
            alt="Devices illustration"
            width={750}
            height={400}
            className="mx-auto mt-20"
            priority
          />
        </div>
      </div>
    </section>
  );
}
