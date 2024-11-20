import React from "react";
import Link from "antd/es/typography/Link";

import { List } from "./index.js";

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
          <List key={index}>
            <Link to={value.path}>{value.title}</Link>
          </List>
        );
      })}
    </>
  );
};
export default Navlinks;
