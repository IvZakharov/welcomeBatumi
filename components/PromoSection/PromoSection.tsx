import styles from "./PromoSection.module.scss";
import React from "react";
import Link from "next/link";
import ImagePromo from "./img/3.png";
import Image from "next/image";

const PromoSection: React.FC = () => {
  return (
    <section className={styles.promoSection}>
      <div className={"container"}>
        <article className={`${styles.promo}`}>
          <Link href={"#"}>
            <h3 className={styles.title}>Классная новость или акция</h3>
            <p className={styles.description}>
              Купите новую квартиру в ипотеку, <br /> а потом без спешки
              продавайте старую.
            </p>
            <button className={"button my-2 py-3.5 px-9 w-full md:w-auto"}>
              Подробнее
            </button>
            <div className={styles.imageBox}>
              <Image
                src={ImagePromo}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt={"Новостройки"}
              />
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
};

export default PromoSection;
