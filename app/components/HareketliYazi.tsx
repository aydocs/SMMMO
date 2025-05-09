import { useEffect, useState } from "react";
import styles from "./HareketliYazi.module.css";

interface Props {
  yazilar: Array<string>;
}

export default function HareketliYazi({ yazilar }: Props) {
  const [currentText, setText] = useState(yazilar[0]);
  const [currentClass, setCurrentClass] = useState(styles.fadeIn);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClass(styles.fadeOut);

      setTimeout(() => {
        setText((oncekiYazi) => {
          const currentIndex = yazilar.indexOf(oncekiYazi);
          const sonrakiIndex = (currentIndex + 1) % yazilar.length;

          return yazilar[sonrakiIndex];
        });

        setCurrentClass(styles.fadeIn);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return <p className={currentClass + " mb-4 animated-text"}>{currentText}</p>;
}
