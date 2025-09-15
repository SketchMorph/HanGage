"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        About Designer
      </h2>

      {/* 프로필 */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-64 h-80 relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/profile01.jpg"
            alt="Designer Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">한진례 디자이너</h3>
          <p className="text-gray-700 leading-relaxed">
            전주를 기반으로 활동하는 생활한복 디자이너로서, 전통과 현대의 경계를 넘나들며
            일상 속에서 편안하게 입을 수 있는 한복을 제작합니다.
          </p>
        </div>
      </div>

      {/* 이력 */}
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-gray-900">주요 활동 이력</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>2025 전주국제춤페스티벌 – 금파춤무용단 무용복 제작</li>
          <li>어린이 무용단 한복 제작</li>
        </ul>
      </div>

      {/* 작품 사진 */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/금파춤무용단.jpg"
            alt="금파춤무용단 한복 제작"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/어린이무용단.jpg"
            alt="어린이 무용단 한복 제작"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
