// hanbok-site/app/_components/HeroSection.jsx
"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

const HeroSection = () => {
  const { t } = useTranslation("common"); // common.json과 반드시 매칭

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white">
      <Image
        src="/hero-hanbok.jpg"
        alt="Lifestyle Hanbok"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-center text-white px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          {t("brandSlogan")}
        </h2>
        <p className="text-lg md:text-xl mb-8">{t("subSlogan")}</p>
        <a
          href="/lookbook"
          className="px-10 py-3 bg-blue-900 hover:bg-blue-800 transition rounded-full text-white text-lg font-semibold shadow-lg"
        >
          {t("lookbook")}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
