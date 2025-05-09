"use client";

import { useEffect } from "react";
import Image from "next/image";
import HareketliResimler from "./components/HareketliResimler";
import HareketliYazi from "./components/HareketliYazi";
import HareketliBaslik from "./components/HareketliBaslik";
import TanitimKutusu from "./components/TanitimKutusu";
import İletisimFormu from "./components/İletisimFormu";
import ScrollButonu from "./components/ScrollButonu";


export default function Home() {
  useEffect(() => {
    const wow = require("wowjs");
    new wow.WOW().init();
  }, []);

  return (
    <>
      <div
        className="page-hero-section bg-image hero-home-1"
        style={{ backgroundImage: "url('/img/bg_hero_1.svg')" }}
      >
        <div className="hero-caption pt-5">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-lg-6 wow fadeInUp">
                <div className="badge mb-2">
                </div>
                <HareketliBaslik
                  yazilar={[
                    "Herkese Açık Giriş Ekranı",
                    "Özel Menülere Erişim",
                    "Cv Bankası Geçerlilik Süresi",
                    "Almanak Erişimi ve İşlevsellik",
                  ]}
                ></HareketliBaslik>
                <HareketliYazi
                  yazilar={[
                    "Uygulama giriş ekranı üye olsun ya da olmasın tüm kullanıcılara açıktır",
                    "Üyeler giriş yaptıklarında kendilerine özel menülere erişim sağlayabilir",
                    "Cv Bankası için 1 aylık geçerlilik süresi vardır. Süre dolduğunda ilgili üyeye SMS bildirimi ya da E-Mail bildirimi yapılır.",
                    "Üyeler almanağa erişim sağlayabilir, almanak üzerinde arama ve filtreleme işlemleri yapabilirler",
                  ]}
                ></HareketliYazi>
                <div className="ml-auto my-2 my-lg-0">
                  <a
                    id="download-btn"
                    className="btn btn-primary rounded-pill"
                    href="#"
                  >
                    Uygulamamızı edinin
                  </a>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block wow zoomIn">
                <div className="img-place mobile-preview shadow floating-animate">
                  <HareketliResimler
                    resimler={[
                      "/img/onay_kodu.png",
                      "/img/menuler.png",
                      "/img/anasayfa.png",
                      "/img/panel.png",
                    ]}
                    resimAlt="Uygulamadan sayfalar"
                  ></HareketliResimler>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="position-realive bg-image"
        style={{ backgroundImage: "url('/img/pattern_1.svg')" }}
      >
        <div className="page-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 py-3">
                <div className="img-place mobile-preview shadow wow zoomIn">
                  <Image
                    src="/img/anasayfa.png"
                    alt="Uygulama anasayfa"
                    height={400}
                    width={800}
                  />
                </div>
              </div>
              <div className="col-lg-6 py-3 mt-lg-5">
                <div className="iconic-list">
                  <div className="iconic-item wow fadeInUp">
                    <div className="iconic-md iconic-text bg-warning fg-white rounded-circle">
                      <span className="mai-hammer-outline"></span>
                    </div>
                    <div className="iconic-content">
                      <h5>Özgün Tasarım</h5>
                      <p className="fs-small">
                        Tasarımı Oda Yönetim Yazılımı’ya ait tamamen özgün ve benzersiz
                        bir uygulama olarak geliştirildi
                      </p>
                    </div>
                  </div>
                  <div className="iconic-item wow fadeInUp">
                    <div className="iconic-md iconic-text bg-info fg-white rounded-circle">
                      <span className="mai-flash-outline"></span>
                    </div>
                    <div className="iconic-content">
                      <h5>Hızlı Erişim Butonları</h5>
                      <p className="fs-small">
                        Kategorilere ayrılmış haber ve duyurular için
                        Anasayfa’dan yönlendirme yapılır
                      </p>
                    </div>
                  </div>
                  <div className="iconic-item wow fadeInUp">
                    <div className="iconic-md iconic-text bg-indigo fg-white rounded-circle">
                      <span className="mai-man-outline"></span>
                    </div>
                    <div className="iconic-content">
                      <h5>Sponsor Logosu</h5>
                      <p className="fs-small">
                        Logoya tıklandığında sponsorun belirlediği adrese
                        yönlendirme yapılır.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 py-3">
                <div className="iconic-list">
                  <div className="iconic-item wow fadeInUp">
                    <div className="iconic-content">
                      <h5>Pratik Bilgiler</h5>
                      <p className="fs-small">
                        Pratik Bilgiler kataloğu üzerinde arama yapılabilir ve
                        sonuçlar ﬁltrelenebilir.
                      </p>
                    </div>
                    <div className="iconic-md iconic-text bg-warning fg-white rounded-circle">
                      <span className="mai-document-text-outline"></span>
                    </div>
                  </div>
                  <div className="iconic-item wow fadeInUp">
                    <div className="iconic-content">
                      <h5>CV Bankası</h5>
                      <p className="fs-small">
                        Üyelerin erişimine açık kullanışlı CV Bankası içerir.
                      </p>
                    </div>
                    <div className="iconic-md iconic-text bg-info fg-white rounded-circle">
                      <span className="mai-briefcase-outline"></span>
                    </div>
                  </div>
                  <div className="iconic-item wow fadeInUp">
                    <div className="iconic-content">
                      <h5>Anket Sistemi</h5>
                      <p className="fs-small">
                        Üyelere ve yöneticilere yönelik Anket Sistemi içerir.
                      </p>
                    </div>
                    <div className="iconic-md iconic-text bg-indigo fg-white rounded-circle">
                      <span className="mai-clipboard-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 py-3 wow zoomIn">
                <div className="img-place mobile-preview shadow">
                  <Image
                    src="/img/menuler.png"
                    alt="Uygulama yan menüsü"
                    height={400}
                    width={800}
                  />
                </div>
              </div>
              <div className="col-lg-4 py-3">
                <div className="iconic-list">
                  <div className="iconic-item wow fadeInUp">
                    <div className="iconic-md iconic-text bg-warning fg-white rounded-circle">
                      <span className="mai-calendar-outline"></span>
                    </div>
                    <div className="iconic-content">
                      <h5>Mali Takvim</h5>
                      <p className="fs-small">
                        Mali takvim her yıl maliyenin sitesinden alınarak
                        sisteme entegre edilir.
                      </p>
                    </div>
                  </div>
                  <div className="iconic-item wow fadeInUp">
                    <div className="iconic-md iconic-text bg-success fg-white rounded-circle">
                      <span className="mai-chatbox-outline"></span>
                    </div>
                    <div className="iconic-content">
                      <h5>SMS</h5>
                      <p className="fs-small">
                        SMS şablonları ile doğum günlerinde üyelere otomatik SMS
                        gönderilir.
                      </p>
                    </div>
                  </div>
                  <div className="iconic-item wow fadeInUp">
                    <div className="iconic-md iconic-text bg-indigo fg-white rounded-circle">
                      <span className="mai-eye-outline"></span>
                    </div>
                    <div className="iconic-content">
                      <h5>Kampanya Takip</h5>
                      <p className="fs-small">
                        Anlaşmalı Kurumlar için kampanya takip sistemi içerir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Eğitimler ve Seminerler */}
        <TanitimKutusu
          resimler={["/img/egitimler.png", "/img/egitimler_2.png"]}
          resimAlt="Eğitimler ve seminerler"
          baslik="Eğitimler ve Seminerler"
          metin="Uygulama, tanımladığınız Eğitim ve Seminerlere online başvuru imkanı getirir. Kullanıcılar tanımladığınız etkinliklere mobil uygulama üzerinden katılım kaydı oluşturabilir, varsa kayıtlarını iptal edebilirler."
        ></TanitimKutusu>

        {/*Anketler */}
        <TanitimKutusu
          resimler={["/img/anketler.png", "/img/anketler_2.png"]}
          resimAlt="Anketler"
          baslik="Anlık Anket Takibi ve Sonuçlar"
          metin="Yöneticiler anketler henüz doldurulurken bile sonuçları mobil cihazlarından takip edebilirler."
          yon="sol"
        ></TanitimKutusu>

        {/*Mali Takvim */}
        <TanitimKutusu
          resimler={["/img/mali_takvim.png", "/img/mali_takvim_2.png"]}
          resimAlt="Mali takvim"
          baslik="Mali Takvim"
          metin="Kolayca takvime eklenebilen, paylaşılabilen ve alarm kurulabilen Mali Takvim! Mali Takvim etkinlikleri her yıl otomatik olarak güncellenir…."
        ></TanitimKutusu>

        {/*Farklı Türden Etkinlikler */}
        <TanitimKutusu
          resimler={["/img/egitimler.png", "/img/egitimler_2.png"]}
          resimAlt="Farklı türden etkinlikler"
          baslik="Farklı Türden Etkinlikler"
          metin="Eğitim, Seminer, Toplantı … Her bir etkinlik türü farklı renklerle gösterilir ve katılım ilgili kullanıcı türüne göre sınırlandırılabilir."
          yon="sol"
        ></TanitimKutusu>

        {/*Detaylı Etkinlik Bilgileri*/}
        <TanitimKutusu
          resimler={["/img/vergi_usul.png"]}
          resimAlt="Detaylı etkinlik bilgileri"
          baslik="Detaylı Etkinlik Bilgileri"
          metin="Tüm etkinlikler Tarih, Saat, Lokasyon, Kontenjan ve Son Katılım tarihi belirtilerek açık ve net şekilde tanımlanır. Kullanıcılar kendi mobil uygulamaları üzerinden katılabilir ya da katılım kayıtlarını iptal edebilirler. İsterlerse unutmamak için hatırlatıcı kurabilir ya da Whatsapp / Facebook gibi platformlar üzerinden paylaşabilirler …"
        ></TanitimKutusu>

        {/*Kategori Bazlı Haberler */}
        <TanitimKutusu
          resimler={["/img/haberler.png", "/img/haberler_2.png"]}
          baslik="Kategori Bazlı Haberler"
          metin="Haberler ve Duyurular 4 farklı kategori altında gruplanabilir ve görseller eklenerek kullanıcılara ulaştırılabilir. Anasayfada görüntülenmeye izni verilerek, ilgili duyurunun uygulamanın açılış sayfasında da ayrıca görüntülenmesi sağlanabilir."
          resimAlt="Kategori bazlı haberler"
          yon="sol"
        ></TanitimKutusu>

        {/*Oda Yönetim Yazılımı’ya Ulaşmak Çok Daha Kolay*/}
        <TanitimKutusu
          resimler={["/img/iletisim.png", "/img/iletisim_2.png"]}
          resimAlt="İletişim"
          baslik="Oda Yönetim Yazılımı’ya Ulaşmak Çok Daha Kolay"
          metin="Herkese açık iletişim formu üzerinden üye olsun olmasın herkes mesaj gönderebilir. Eğer kullanıcı giriş yaptıktan sonra bu sayfayı kullanırsa mesajı, kendi üye bilgisi ile birlikte gönderilir. Böylece mesajların üyeden ya da diğer kullanıcılardan gelen şeklinde sınıﬂandırılması sağlanır …"
        ></TanitimKutusu>

        {/*Üye Girişleri Kolay ve Maliyetsiz*/}
        <TanitimKutusu
          resimler={["/img/onay_kodu.png", "/img/onay_kodu_2.png"]}
          resimAlt="Giriş ekranı"
          baslik="Üye Girişleri Kolay ve Maliyetsiz"
          yon="sol"
          metin="Üyeler sisteme cep telefonu numaraları ile giriş yapar. Sisteme kayıtlı cep telefonlarına gönderilen 4 haneli kodu kullanarak uygulamaya giriş yaparlar. Uygulama bildirimleri, kuruma ya da üyeye herhangi bir maliyet getirmez. Tamamen ücretsizdir …"
        ></TanitimKutusu>

        {/* Yöneticilerin İşini Kolaylaştırır*/}
        <TanitimKutusu
          resimler={["/img/panel.png"]}
          resimAlt="Panel"
          baslik="Yöneticilerin İşini Kolaylaştırır"
          metin="Oda Yönetim Yazılımı mobil uygulaması yöneticiler ve personeller için çok kullanışlı bir iş takip uygulaması da içerir. Uygulama üzerinden yöneticilere, istatistikler, kullanıcı sayıları ve devam eden / biten işler konusunda bilgilendirmeler yapılır. Anket sonuçları anında görüntülenebilir ve sonuçlara ve istatistiklere anlık olarak erişilebilinir."
        ></TanitimKutusu>

        {/*Personele Atanan Görevler*/}
        <TanitimKutusu
          resimler={["/img/gorevler.png", "/img/gorevler_2.png"]}
          resimAlt="Görevler"
          baslik="Personele Atanan Görevler"
          yon="sol"
          metin="Tanımlanan görev bir veya daha fazla personele atanabilir. Göreve dair tamamlanması istenilen son tarih belirtilebilir. Tanımlanan göreve dair güncellemeler yine uygulama üzerinden güncellenebilir. Personeller kendilerine atanan görevleri görebilir durumlarını TAMAMLANDI ya da YAPILIYOR olarak güncelleyebilirler …"
        ></TanitimKutusu>

        {/*Nitelikli Yönetim Paneli*/}
        <div className="page-section">
          <div className="container">
            <div className="row">
              <div className="col-12 py-3">
                <HareketliResimler
                  resimler={[
                    "/img/yonetim_paneli.png",
                    "/img/yonetim_paneli_2.png",
                  ]}
                  resimAlt="Yönetim paneli"
                ></HareketliResimler>
              </div>
            </div>
            <div className="row">
              <div className="col-12 py-3 mt-lg-5 text-justify wow fadeInUp">
                <h1 className="mb-4">Nitelikli Yönetim Paneli</h1>
                <p className="mb-4">
                  Mobil uygulama yönetim sistemi ile uygulamaya ait ayarlar ve
                  tanımlamalar kolayca yapılabilir. Yetkilendirme, Personel,
                  Yönetici ve Üye Tanımları, Toplu Sms Gönderme, Bildirim
                  Yönetim Sistemi, Anket ve Eğitim & Seminer Tanımlama gibi bir
                  çok işlem yönetim paneli üzerinden kolayca yapılır.
                  Yöneticiler, istatistiklere ve detaylı raporlara yine bu
                  sistem üzerinden erişilebilir."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-section bg-dark fg-white">
        <div className="container">
          <h1 className="text-center">Neden Bizi Tercih Etmelisiniz</h1>

          <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-lg-3 py-3">
              <div className="card card-body border-0 bg-transparent text-center wow zoomIn">
                <div className="mb-3">
                  <Image
                    src="/img/icons/survey.svg"
                    alt=""
                    height={70}
                    width={70}
                  />
                </div>
                <p className="fs-large">Anlık Anket Takibi & Sonuçlar</p>
                <p className="fs-small fg-grey">
                  Yöneticiler anket sonuçlarını anında mobil cihazlarından takip
                  edebilir.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div
                className="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="200ms"
              >
                <div className="mb-3">
                  <Image
                    src="/img/icons/personal.svg"
                    alt=""
                    height={70}
                    width={70}
                  />
                </div>
                <p className="fs-large">Personele Atanan Görevler</p>
                <p className="fs-small fg-grey">
                  Tanımlanan görev bir veya daha fazla personele atanabilir.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div
                className="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="400ms"
              >
                <div className="mb-3">
                  <Image
                    src="/img/icons/calendar.svg"
                    alt=""
                    height={70}
                    width={70}
                  />
                </div>
                <p className="fs-large">Düzenli Mali Takvim Yıllığı</p>
                <p className="fs-small fg-grey">
                  Kolayca eklenip paylaşılabilen ve alarm kurulabilen Mali
                  Takvim!
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div
                className="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="800ms"
              >
                <div className="mb-3">
                  <Image
                    src="/img/icons/support.svg"
                    alt=""
                    height={70}
                    width={70}
                  />
                </div>
                <p className="fs-large">24/7 Destek Hattı</p>
                <p className="fs-small fg-grey">
                  Her zaman yanınızdayız! Günün her saati, haftanın her günü
                  bize ulaşarak destek alabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="page-section bg-image bg-image-overlay-dark"
        style={{ backgroundImage: "url('/img/bg_testimonials.jpg')" }}
      >
        <div className="container fg-white">
          <div className="row">
            <div className="col-md-8 col-lg-6 offset-lg-1 wow fadeInUp">
              <h2 className="mb-5 fg-white fw-normal">
                Müşteri Memnuniyeti Önceliğimizdir
              </h2>
              <p className="fs-large font-italic">
                “Hizmet kalitesi ve müşteri odaklı yaklaşımımız sayesinde her
                zaman güvenilir bir deneyim sunuyoruz. Kullanıcılarımızın
                memnuniyeti bizim için en büyük motivasyon kaynağı.”
              </p>
              <p className="fs-large fg-grey fw-medium mb-5">Oda Yönetim Yazılımı</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <İletisimFormu />
      </div>
      <div>
        <ScrollButonu />
      </div>
    </>
  );
}
