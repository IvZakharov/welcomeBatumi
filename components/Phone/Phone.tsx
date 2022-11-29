import styles from "./Phone.module.scss";
import React from "react";

type Phone = {
  darkTheme: boolean;
  align: "left" | "right";
};

const Phone: React.FC<Phone> = ({ darkTheme, align }) => {
  return (
    <div
      className={`${styles.phone} ${darkTheme ? styles.darkTheme : ""} ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <a href="#" className={`${styles.phoneNumber}`}>
        +7 (000) 000-00-00
      </a>

      <span className={`${styles.requestCall}`}>Заказать звонок</span>
    </div>
  );
};

export default Phone;
