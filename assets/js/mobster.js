;$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 3,
    center: true,
    nav: true,
    dots: false,
    loop: true,
  });
});

wow = new WOW();

wow.init();

const titles = ["Herkese Açık Giriş Ekranı", "Özel Menülere Erişim", "Cv Bankası Geçerlilik Süresi", "Almanak Erişimi ve İşlevsellik"];
const texts = [
  "Uygulama giriş ekranı üye olsun ya da olmasın tüm kullanıcılara açıktır",
  "Üyeler giriş yaptıklarında kendilerine özel menülere erişim sağlayabilir",
  "Cv Bankası için 1 aylık geçerlilik süresi vardır. Süre dolduğunda ilgili üyeye SMS bildirimi ya da E-Mail bildirimi yapılır.",
  "Üyeler almanağa erişim sağlayabilir, almanak üzerinde arama ve filtreleme işlemleri yapabilirler",
];
const images = [
  "../assets/img/onay_kodu.png",
  "../assets/img/menuler.png",
  "../assets/img/anasayfa.png",
  "../assets/img/panel.png"
];

let index = 0; // Şu anki içerik indeksini takip eder

function updateContent() {
  // Elementleri seç
  const titleElement = document.getElementById("dynamic-title");
  const textElement = document.getElementById("dynamic-text");
  const imageElement = document.getElementById("dynamic-image");

  // Fade-out animasyonu ekle
  titleElement.classList.add("fade-out");
  textElement.classList.add("fade-out");
  imageElement.classList.add("fade-out");

  // Fade-out tamamlandıktan sonra içerikleri değiştir
  setTimeout(() => {
    titleElement.textContent = titles[index];
    textElement.textContent = texts[index];
    imageElement.src = images[index];

    // Fade-in animasyonu ekle
    titleElement.classList.remove("fade-out");
    titleElement.classList.add("fade-in");

    textElement.classList.remove("fade-out");
    textElement.classList.add("fade-in");

    imageElement.classList.remove("fade-out");
    imageElement.classList.add("fade-in");

    // Bir süre sonra tekrar sınıfları sıfırla
    setTimeout(() => {
      titleElement.classList.remove("fade-in");
      textElement.classList.remove("fade-in");
      imageElement.classList.remove("fade-in");
    }, 500);
  }, 500);

  // İndeksi güncelle
  index = (index + 1) % titles.length;
}

// Her 3 saniyede bir içerik değişimi
setInterval(updateContent, 3750);


document.getElementById("download-btn").addEventListener("click", function(event) {
  event.preventDefault(); // Varsayılan link davranışını engelle

  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var downloadLink = "#"; // Varsayılan olarak hiçbir yere yönlendirmez

  var iosLink = "https://apps.apple.com/tr/app/sakarya-smmmo/id1668300960?l=tr"; // iOS linki
  var androidLink = "https://play.google.com/store/apps/details?id=com.bgs.smmmo"; // Android linki

  if (/windows phone/i.test(userAgent)) {
      downloadLink = "https://example.com/wind"; // Windows Phone indirme linki
  } else if (/android/i.test(userAgent)) {
      downloadLink = androidLink; // Android indirme linki
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      downloadLink = iosLink; // iOS indirme linki
  } else {
      downloadLink = "https://example.com/other-download"; // Diğer cihazlar için link
  }

  window.location.href = downloadLink;
});