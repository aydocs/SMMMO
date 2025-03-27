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