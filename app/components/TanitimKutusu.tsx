import Image from "next/image";
import HareketliResimler from "./HareketliResimler";

interface Props {
  resimler: Array<string>;
  resimAlt: string;
  baslik: string;
  metin: string;
  yon?: string;
}

export default function TanitimKutusu({
  resimler,
  baslik,
  metin,
  resimAlt,
  yon = "sag",
}: Props) {
  return (
    <div className="page-section">
      <div className="container">
        <div className="row">
          {yon == "sag" ? (
            <div className="col-lg-6 offset-lg-1 py-3 mt-lg-5 wow fadeInUp">
              <h1 className="mb-4">{baslik}</h1>
              <p className="mb-4 text-justify">{metin}</p>
            </div>
          ) : null}
          <div className="col-lg-5 py-3">
            <div className="img-place mobile-preview shadow wow zoomIn">
              {resimler.length > 1 ? (
                <HareketliResimler
                  resimler={resimler}
                  resimAlt={resimAlt}
                ></HareketliResimler>
              ) : (
                <Image
                  src={resimler[0]}
                  alt={resimAlt}
                  height={400}
                  width={800}
                ></Image>
              )}
            </div>
          </div>
          {yon == "sol" ? (
            <div className="col-lg-6 offset-lg-1 py-3 mt-lg-5 wow fadeInUp">
              <h1 className="mb-4">{baslik}</h1>
              <p className="mb-4 text-justify">{metin}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
