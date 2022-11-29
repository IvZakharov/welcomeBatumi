import styles from "./ProjectCard.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectCard = {
  name: string;
  imagePath: string;
  slug: string;
  vip: boolean;
  label?: "sale" | "start" | "credit";
  type: string;
  address: string;
  deadline: string;
  priceFrom: string;
  pricePerSqm: string;
};

const placeholder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO49vzVik3b3///P3/pPAZPSzVxBgY9FW4NBQYAxrMK7Iw5NV8AAAAASUVORK5CYII=";

const ProjectCard: React.FC<ProjectCard> = ({
  name,
  imagePath,
  slug,
  vip,
  label,
  type,
  address,
  deadline,
  priceFrom,
  pricePerSqm,
}) => {
  const labelType = (label: string) => {
    switch (label) {
      case "sale":
        return (
          <span className={`${styles.label} ${styles.labelSale}`}>Акция %</span>
        );
      case "start":
        return (
          <span className={`${styles.label} ${styles.labelStart}`}>
            Старт продаж
          </span>
        );
      case "credit":
        return (
          <span className={`${styles.label} ${styles.labelCredit}`}>
            Рассрочка
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <article className={styles.projectCard}>
      <Link href={slug}>
        <div className={styles.imageBox}>
          <Image
            src={imagePath}
            alt={name}
            fill
            blurDataURL={placeholder}
            placeholder={"blur"}
            quality={100}
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          {label && labelType(label)}
          {vip && <span className={styles.vip}>Vip</span>}
        </div>
        <div className={styles.content}>
          <span className={styles.projectType}>{type}</span>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.address}>{address}</p>
          <div className={styles.specs}>
            <div className={styles.row}>
              <p className={styles.type}>Срок сдачи</p>
              <p className={styles.value}>{deadline}</p>
            </div>
            <div className={styles.row}>
              <p className={styles.type}>Квартиры</p>
              <p className={styles.value}>от {priceFrom} ₽</p>
            </div>
            <div className={styles.row}>
              <p className={styles.type}>Стоимость за 1 м²</p>
              <p className={styles.value}>от {pricePerSqm} ₽</p>
            </div>
          </div>

          <div className={styles.buttons}>
            <button className={"button"}>Прайс-лист</button>
            <button className={"buttonLight"}>Планировки</button>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
