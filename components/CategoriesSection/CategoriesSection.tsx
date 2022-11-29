import styles from "./CategoriesSection.module.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImageNew from "./img/1.png";
import ImageSecond from "./img/2.png";

const CategoriesSection: React.FC = () => {
  return (
    <section className={styles.categories}>
      <div className={"container"}>
        <h2 className={styles.title}>Какая недвижимость вас интересует?</h2>

        <div className={"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"}>
          <article className={styles.item}>
            <Link href={"#"}>
              <h3 className={styles.itemTitle}>Новостройки в Батуми</h3>
              <p className={styles.description}>
                Жилые комплексы Батуми с описанием и информацией по наличию
                квартир.
              </p>
              <span className={styles.price}>от 2 700 000 ₽</span>
              <div className={styles.imageBox}>
                <Image
                  src={ImageNew}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  alt={"Новостройки в Батуми"}
                />
              </div>
            </Link>
          </article>

          <article className={styles.item}>
            <Link href={"#"}>
              <h3 className={styles.itemTitle}>Вторичное жильё в Батуми</h3>
              <p className={styles.description}>
                Квартиры, комнаты, апартаменты, таунхаусы от собственников.
              </p>
              <span className={styles.price}>от 1 200 000 </span>
              <div className={styles.imageBox}>
                <Image
                  src={ImageSecond}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  alt={"Вторичное жильё в Батуми"}
                />
              </div>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
