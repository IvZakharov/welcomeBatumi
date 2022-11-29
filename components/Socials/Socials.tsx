import styles from "./Socials.module.scss";
import React from "react";
import whatsappIcon from "./img/whatsapp.svg";
import telegramIcon from "./img/telegram.svg";
import Link from "next/link";
import Image from "next/image";

const Socials: React.FC = () => {
  return (
    <div className={styles.socials}>
      <div className={styles.item}>
        <Link href={""}>
          <Image
            src={whatsappIcon}
            width={26}
            height={26}
            alt={"whatsapp icon"}
          />
        </Link>
      </div>

      <div className={styles.item}>
        <Link href={""}>
          <Image
            src={telegramIcon}
            width={26}
            height={26}
            alt={"telegram icon"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
