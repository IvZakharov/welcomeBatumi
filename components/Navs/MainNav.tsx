import styles from "./Navs.module.scss";
import React from "react";
import Link from "next/link";

const links = [
  "Новостройки",
  "Вторичная недвижимость",
  "Как купить",
  "О Батуми",
  "О компании",
  "Блог",
  "Акции",
  "Контакты",
];

const MainMav: React.FC = () => {
  return (
    <nav className={styles.mainNav}>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <Link href={"#"}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMav;
