"use client";

import { Youtube, ShoppingBag, Instagram, Facebook } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-[#F9F9F7] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Contact
        </h2>

        {/* SNS & 지도 */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* SNS 링크 */}
          <div className="flex flex-col space-y-6">
            <a
              href="https://www.youtube.com/@%ED%95%9C%EC%A7%84%EB%A1%80-g6j"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-lg text-gray-700 hover:text-red-600 transition"
            >
              <Youtube className="w-6 h-6 text-red-600" />
              YouTube 채널
            </a>

            <a
              href="https://smartstore.naver.com/hangagye"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-lg text-gray-700 hover:text-green-600 transition"
            >
              <ShoppingBag className="w-6 h-6 text-green-600" />
              네이버 스마트스토어
            </a>

            <a
              href="https://www.instagram.com/hangagye"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-lg text-gray-700 hover:text-pink-500 transition"
            >
              <Instagram className="w-6 h-6 text-pink-500" />
              Instagram
            </a>

            <span className="flex items-center gap-3 text-lg text-gray-400">
              <Facebook className="w-6 h-6" />
              Facebook (준비중)
            </span>
            <span className="text-lg text-gray-400">Cafe24 (준비중)</span>
          </div>

          {/* 네이버 지도 */}
          <div className="w-full h-80 rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://naver.me/GA8LhINb"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* 기본 연락처 */}
        <div className="text-center mt-12">
          <p className="text-gray-700">📍 전라북도 전주시</p>
          <p className="text-gray-700">
            ✉️ 문의:{" "}
            <a
              href="mailto:info@hangagye.com"
              className="text-blue-900 font-medium underline hover:text-blue-700 transition"
            >
              info@hangagye.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
