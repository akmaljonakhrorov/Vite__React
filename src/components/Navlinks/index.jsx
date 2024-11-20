import React from "react";
import Link from "antd/es/typography/Link";
import { List } from "./index.js";
// i18next language change
import { useTranslation } from "react-i18next";

// const navlinks = [
//   { path: "/homepage", title: t("Bosh Sahifa") },
//   { path: "/about", title: t("Biz Haqimizda") },
//   { path: "/toures", title: t("Turlar") },
//   { path: "/contact", title: t("Kontaktlar") },
// ];
const Navlinks = () => {
  const { t, i18n } = useTranslation();

  const navlinks = [
    { path: "/homepage", title: t("Bosh Sahifa") },
    { path: "/about", title: t("Biz Haqimizda") },
    { path: "/toures", title: t("Turlar") },
    { path: "/contact", title: t("Kontaktlar") },
  ];
  const handleChangeLang = (event) => {
    const selectLang = event.target.value;
    i18n.changeLanguage(selectLang);
  };
  return (
    <>
      {navlinks.map((value, index) => {
        return (
          <List key={index}>
            <Link to={value.path}>{value.title}</Link>
          </List>
        );
      })}
      <select name="lang" id="lang" onChange={handleChangeLang}>
        <option value="uz">Uzbek</option>
        <option value="ru">Russian</option>
        <option value="en">English</option>
      </select>
    </>
  );
};
export default Navlinks;
