import Link from "antd/es/typography/Link";
import React from "react";
const navlinks = [
  { path: "/homepage", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/toures", title: "Toures" },
  { path: "/contact", title: "Contact" },
];
const Navlinks = () => {
  return (
    <>
      {navlinks.map((value, index) => {
        return (
          <li key={index}>
            <Link to={value.path}>{value.title}</Link>
          </li>
        );
      })}
    </>
  );
};
export default Navlinks;
