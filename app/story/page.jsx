"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function StoryPage() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-[#F9F9F7] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          {t("story")}
        </h2>

        {/* 브랜드 철학 소개 */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-lg text-gray-700 leading-relaxed">
            생활한복은 전통을 담고 있으면서도, 일상 속에서 편안하게 입을 수 있는 옷입니다.  
            <br />
            우리는 빛과 바람이 스며드는 듯한 자연스러움 속에서 특별함을 찾습니다.
          </p>
        </div>

        {/* 이미지 그리드 */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/da6ab720-35af-40a7-923f-a5b09bc3f131.png"
              alt="Brand Philosophy"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/hero-hanbok.jpg"
              alt="Hanbok Lifestyle"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
