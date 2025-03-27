import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Anasayfa", href: "/" },
    /*{ name: "Blog", href: "/blog" },*/
    { name: "İletişim", href: "/contact" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-floating ">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img
              src="/img/icons/favicon.png"
              alt="Oda Yönetim Yazılımı Uygulama logosu"
              width="40"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ml-lg-5 mt-3 mt-lg-0">
              {navLinks.map((link) => {
                return (
                  <li className="nav-item" key={link.name}>
                    <Link className="nav-link" href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
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
        </div>
      </nav>
    </>
  );
}
