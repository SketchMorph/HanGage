"use client";

import Image from "next/image";

const lookbookImages = [
  { src: "/look1.jpg", alt: "Hanbok Look 1" },
  { src: "/look2.jpg", alt: "Hanbok Look 2" },
  { src: "/look3.jpg", alt: "Hanbok Look 3" },
  { src: "/look4.jpg", alt: "Hanbok Look 4" },
  { src: "/look5.jpg", alt: "Hanbok Look 5" }
];

export default function LookbookPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Lookbook
      </h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {lookbookImages.map((img, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition duration-300"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={800}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
