"use client";

import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation("common");

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative text-center text-white px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          {t("brandSlogan")}
        </h2>
        <p className="text-lg md:text-xl mb-8">{t("subSlogan")}</p>
        <a
          href="/lookbook"
          className="px-8 py-3 bg-blue-900 hover:bg-blue-800 transition rounded-full text-white font-medium"
        >
          {t("lookbook")}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
