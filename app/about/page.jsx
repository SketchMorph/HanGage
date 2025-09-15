"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation("common");

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
        {t("about")}
      </h2>

      {/* 프로필 */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="w-64 h-80 relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/profile01.jpg"
            alt="Designer Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">{t("designerTitle")}</h3>
          <p className="text-gray-700 leading-relaxed">{t("designerIntro")}</p>
        </div>
      </div>

      {/* 이력 */}
      <div className="space-y-6 mb-16">
        <h4 className="text-xl font-bold text-gray-900">주요 활동 이력</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>2025 전주국제춤페스티벌 – 금파춤무용단 무용복 제작</li>
          <li>어린이 무용단 한복 제작</li>
        </ul>
      </div>

      {/* 작품 사진 */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/금파춤무용단.jpg"
            alt="금파춤무용단 한복 제작"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/어린이무용단.jpg"
            alt="어린이 무용단 한복 제작"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}
