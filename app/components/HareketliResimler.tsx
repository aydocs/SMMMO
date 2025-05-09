import { useEffect, useState } from "react";
import styles from "./HareketliResimler.module.css";
import Image from "next/image";

interface Props {
  resimler: Array<string>;
  resimAlt: string;
}

export default function HareketliResimler({ resimler, resimAlt }: Props) {
  const [currentImage, setEgitimResmi] = useState(resimler[0]);
  const [currentClass, setCurrentClass] = useState(styles.fadeIn);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClass(styles.fadeOut);

      setTimeout(() => {
        setEgitimResmi((oncekiResim) => {
          const currentIndex = resimler.indexOf(oncekiResim);
          const sonrakiIndex = (currentIndex + 1) % resimler.length;

          return resimler[sonrakiIndex];
        });

        setCurrentClass(styles.fadeIn);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      className={currentClass}
      src={currentImage}
      alt={resimAlt}
      height={400}
      width={800}
    />
  );
}
