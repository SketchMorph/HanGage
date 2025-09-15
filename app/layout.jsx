"use client";

import { appWithTranslation } from "next-i18next";

function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

export default appWithTranslation(RootLayout);
