const Footer = () => {
  return (
    <>
      <div className="page-footer-section bg-dark fg-white py-4">
        <div className="container">
          <div className="row">
          <div className="col-12 col-md-9 py-2 d-flex justify-content-end">
              <img src="/img/icons/favicon.png" alt="" width="40" />
              <p className="d-inline-block ml-2">
                Telif Hakkı &copy;{" "}
                <a href="https://www.bgs.io/" className="fg-white fw-medium">
                  Oda Yönetim Yazılımı & BGS
                </a>
                . Tüm hakları saklıdır
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
