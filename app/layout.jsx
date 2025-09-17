"use client";

import "../app/globals.css";
import { appWithTranslation } from "next-i18next";

function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

// ⚠️ 꼭 appWithTranslation으로 export
export default appWithTranslation(RootLayout);
