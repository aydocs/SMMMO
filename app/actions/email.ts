"use server";

import axios from "axios";

// XSS koruması için basit HTML kaçışlayıcı
const escapeHtml = (unsafe: string) =>
  unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export const sendEmailAction = async (formData: FormData) => {
  try {
    const name = escapeHtml(formData.get("name") as string);
    const email = escapeHtml(formData.get("email") as string);
    const mesaj = escapeHtml(formData.get("mesaj") as string);
    const phone = escapeHtml(formData.get("phone") as string);

    // HTML e-posta içeriği
    const htmlMessage = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f9;
              color: #333;
              margin: 0;
              padding: 20px;
            }
            .email-container {
              width: 100%;
              max-width: 700px;
              background-color: #ffffff;
              padding: 30px;
              margin: 0 auto;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            h2 {
              color: #6A1B9A;
              font-size: 28px;
              margin-bottom: 20px;
              text-align: center;
            }
            h3 {
              color: #004D40;
              font-size: 22px;
              margin-bottom: 10px;
            }
            p {
              font-size: 16px;
              line-height: 1.6;
              color: #555;
              margin: 8px 0;
            }
            .highlight {
              font-weight: bold;
              color: #444;
            }
            .footer {
              text-align: center;
              margin-top: 40px;
              font-size: 12px;
              color: #888;
            }
            hr {
              border: 0;
              border-top: 1px solid #ddd;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <h2>Kullanıcı Mesajı</h2>
            <div class="section">
              <h3>Mesaj:</h3>
              <p>${mesaj}</p>
            </div>
            <hr />
            <div class="section">
              <h3>İletişim Bilgileri</h3>
              <p><span class="highlight">Adı Soyadı:</span> ${name}</p>
              <p><span class="highlight">E-posta Adresi:</span> ${email}</p>
              <p><span class="highlight">Telefon:</span> ${phone}</p>
            </div>
            <div class="footer">
              <p>&copy; 2025 Oda Yönetim Yazılımı Tanıtım Sitesi | Tüm Hakları Saklıdır</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // API datası
    const data = {
      mailAdresleri: "saglam.mehmet@gmail.com",
      mesaj: mesaj,
      bolumler: [
        {
          alanlar: {
            Konu: "Oda Yönetim Yazılımı İletişim Bölümünden Gönderildi",
            Mesaj: mesaj,
            HTMLMesaj: htmlMessage
          },
          bolumAdi: "Kullanıcı Mesajı",
        },
        {
          alanlar: {
            "Adı Soyadı": name,
            "E-posta Adresi": email,
            "Telefon": phone,
          },
          bolumAdi: "İletişim Bilgileri",
        },
      ],
    };

    // API endpoint (POST istekle)
    const response = await axios.post("https://digipo.web.tr/api/mail", {
      tema: "mail",
      fromMail: "no-reply@postamerkezi.link",
      fromName: "SMMMO TANITIM SİTESİ",
      data,
    });

    if (response.status === 200) {
      return {
        sonuc: true,
        mesaj: "Email başarıyla gönderildi!",
        response: null,
        hata: null,
      };
    } else {
      return {
        sonuc: false,
        mesaj: "Email gönderilemedi. Lütfen tekrar deneyin.",
        response: response.data,
        hata: null,
      };
    }
  } catch (error: any) {
    console.error("Email gönderim hatası:", error?.response || error);
    return {
      sonuc: false,
      mesaj: "Bir hata oluştu, lütfen tekrar deneyin.",
      response: null,
      hata: error,
    };
  }
};
