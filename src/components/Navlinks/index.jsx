import React from "react";
import Link from "antd/es/typography/Link";
import { List, Section } from "./index.js";
// i18next language change
import { useTranslation } from "react-i18next";
// icons
import { FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";

const Navlinks = () => {
  const { t, i18n } = useTranslation();
  const navlinks = [
    { path: "/homepage", title: t("Bosh Sahifa") },
    { path: "/about", title: t("Biz Haqimizda") },
    { path: "/tours", title: t("Turlar") },
    { path: "/contact", title: t("Kontaktlar") },
  ];

  const handleChangeLang = (event) => {
    const selectLang = event.target.value;
    i18n.changeLanguage(selectLang);
  };
  const languages = localStorage.getItem("i18nextLng");

  return (
    <>
      {navlinks.map((value, index) => {
        return (
          <List key={index}>
            <Link to={value.path}>{value.title}</Link>
          </List>
        );
      })}
      <Section>
        <div className="contact">
          <FaTelegram className="nav-icon" />
          <FaInstagramSquare className="nav-icon" />
          <FaFacebook className="nav-icon" />
        </div>
        <select
          name="lang"
          id="lang"
          onChange={handleChangeLang}
          value={languages}
        >
          <option value="uz">Uzbek</option>
          <option value="ru">Russian</option>
          <option value="en">English</option>
        </select>
      </Section>
    </>
  );
};
export default Navlinks;
