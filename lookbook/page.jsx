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
    <section className="bg-[#F9F9F7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Lookbook
        </h2>

        {/* Masonry 스타일 */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {lookbookImages.map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-500"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={1200}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
