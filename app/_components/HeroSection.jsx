"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

const HeroSection = () => {
  const { t } = useTranslation("common");

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white">
      {/* 배경 이미지 */}
      <Image
        src="/hero-hanbok.jpg" // public 폴더에 대표 한복 이미지 넣기
        alt="Lifestyle Hanbok"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 텍스트 */}
      <div className="relative text-center text-white px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          {t("brandSlogan")}
        </h2>
        <p className="text-lg md:text-xl mb-8 font-light">
          {t("subSlogan")}
        </p>
        <a
          href="/lookbook"
          className="px-10 py-3 rounded-full bg-blue-900 hover:bg-blue-800 transition text-white text-lg font-semibold shadow-lg"
        >
          {t("lookbook")}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
