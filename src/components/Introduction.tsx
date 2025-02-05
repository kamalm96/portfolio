"use client";
// Import the data from the data file
import { data } from "../data/data";

export default function Introduction() {
  return (
    <section className="bg-[#7510F7] text-white pt-20 pb-64">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Hi, I&apos;m {data.name}. Nice to meet you.
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">{data.bio}</p>
      </div>
    </section>
  );
}
