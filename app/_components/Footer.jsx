"use client";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 한가게. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://instagram.com/hangagye" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://youtube.com/@%ED%95%9C%EC%A7%84%EB%A1%80-g6j" target="_blank" rel="noreferrer">YouTube</a>
          <a href="https://smartstore.naver.com/hangagye" target="_blank" rel="noreferrer">SmartStore</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
