"use client";

import { useEffect } from "react";
import { sendEmailAction } from "../actions/email";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  useEffect(() => {
    const wow = require("wowjs");
    new wow.WOW().init();
  }, []);

  const router = useRouter();

  const submit = async (formData: FormData) => {
    await sendEmailAction(formData).then((response) => {
      if (response.sonuc) {
        toast.success("Email gönderildi!");
        router.replace("/contact");
      } else {
        console.log(response);
        toast.error(response.mesaj);
      }
    });
  };

  return (
    <>
      <Toaster richColors position="top-right" />
      <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 py-5 mb-5 mb-lg-0 wow zoomIn">
              <h3 className="mb-4">
                <strong>BGS İnteraktif AŞ</strong>
              </h3>
              <p className="mb-3">
                <strong>Adres:</strong> <br />
                Erenler, 1201.Sokak No.5, (Meydan 54 İş Merkezi 1.Kat No:23)
                54200 Erenler/Sakarya
              </p>
              <p className="mb-2">
                <strong>Telefon: </strong>
                <br />
                <span className="mai-call-outline">+90 (850) 303 77 20</span>
              </p>
              <p className="mb-2">
                <strong>Fax: </strong>
                <br />
                08503037719
              </p>
              <p className="mb-2">
                <strong>Mail: </strong>
                <br />
                mail@bgs.io
              </p>
            </div>
            <div className="col-lg-5 py-5 wow zoomIn">
              <h3 className="mb-4">
                <strong>İletişim Formu</strong>
              </h3>
              <form action={submit}>
                <div className="form-group wow fadeInUp">
                  <label htmlFor="name" className="fw-medium fg-grey">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                  />
                </div>

                <div className="form-group wow fadeInUp">
                  <label htmlFor="email" className="fw-medium fg-grey">
                    E-mail
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>

                <div className="form-group wow fadeInUp">
                  <label htmlFor="phone" className="fw-medium fg-grey">
                    Telefon Numarası
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    placeholder="5555555555"
                    required
                  />
                </div>

                <div className="form-group wow fadeInUp">
                  <label htmlFor="message" className="fw-medium fg-grey">
                    Mesaj
                  </label>
                  <textarea
                    rows={1}
                    className="form-control"
                    id="message"
                    name="mesaj"
                  ></textarea>
                </div>

                <div className="form-group mt-4 wow fadeInUp">
                  <button type="submit" className="btn btn-primary">
                    Mesaj Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
          <hr />
          <div className="google-map wow zoomIn">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.2960582425439!2d30.41025389194945!3d40.739589315956366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb3b7bbd74d77%3A0x65a504dc1f1b39ad!2sMeydan%2054%20Ya%C5%9Fam%20ve%20Ticaret%20Merkezi!5e0!3m2!1str!2str!4v1739258500709!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
