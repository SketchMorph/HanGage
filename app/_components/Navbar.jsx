"use client";

import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const changeLanguage = (lang) => {
    router.push(`/${lang}`);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-900">{t("brandName")}</h1>
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="/lookbook">{t("lookbook")}</a>
          <a href="/about">{t("about")}</a>
          <a href="/story">{t("story")}</a>
          <a href="/contact">{t("contact")}</a>
        </div>
        <div className="flex gap-2">
          <button onClick={() => changeLanguage("ko")}>🇰🇷</button>
          <button onClick={() => changeLanguage("en")}>🇺🇸</button>
          <button onClick={() => changeLanguage("ja")}>🇯🇵</button>
          <button onClick={() => changeLanguage("zh")}>🇨🇳</button>
          <button onClick={() => changeLanguage("fr")}>🇫🇷</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
