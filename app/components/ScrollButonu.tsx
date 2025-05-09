import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  // Sayfa kaydırıldığında butonun görünür olup olmadığını kontrol eder
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {  // Sayfa 300px aşağı kaydırıldığında buton görünür
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Sayfayı yukarı kaydırma fonksiyonu
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Kaydırma işlemini yumuşak yapar
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top-btn ${showButton ? 'show' : ''}`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
