import React from "react";
import { Container, Logo } from "./index";
import logoImg from "../../assets/images/logoImg.png";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
//
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const dataToTranslate = [
    {
      home: t("navlinks.home"),
      about: t("navlinks.about"),
      tours: t("navlinks.tours"),
      contact: t("navlinks.contact"),
    },
  ];

  const handleChangeLang = (event) => {
    const selectLang = event.target.value;
    i18n.changeLanguage(selectLang);
  };
  const languages = localStorage.getItem("i18nextLng");

  return (
    <Container>
      {dataToTranslate.map((value, index) => {
        return (
          <div key={index}>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid container text-center">
                <a class="navbar-brand" href="#">
                  <Logo src={logoImg} alt="logo__image" />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div className="col">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                          {value.home}
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="">
                          {value.about}
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          {value.tours}
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          {value.contact}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="contact">
                    <a href="https://t.me/+yo3-7v2W5jsxOGYy">
                      <FaTelegram className="nav-icon" />
                    </a>
                  </div>
                  <div className="contact">
                    <a href="https://www.instagram.com/accounts/login/?hl=en">
                      <FaInstagramSquare className="nav-icon instagram" />
                    </a>
                  </div>
                  <div className="contact">
                    <a href="https://www.facebook.com">
                      <FaFacebook className="nav-icon" />
                    </a>
                  </div>
                  <div className="contact">
                    <select
                      className="btn btn-outline-primary"
                      name="lang"
                      id="lang"
                      onChange={handleChangeLang}
                      value={languages}
                    >
                      <option value="uz">Uzbek</option>
                      <option value="ru">Russian</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        );
      })}
    </Container>
  );
};
export default Navbar;
