import styles from "./MainHero.module.scss";
import React from "react";
import Image from "next/image";
import HeroImg from "./img/hero.png";
import ProjectCard from "../Project/Card/ProjectCard";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const MainHero = () => {
  const arrowPrev = React.useRef<HTMLButtonElement>(null);
  const arrowNext = React.useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.hero}>
      <div className="container">
        {" "}
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
          <div className="md:pt-20">
            <h1 className={styles.title}>
              Поможем найти <br />
              недвижимость <br />в Батуми{" "}
              <Image src={HeroImg} width={58} height={34} alt={"hero image"} />
            </h1>
            <p className={styles.description}>
              Только свежие предложения <br /> и реальные объекты по выгодным
              ценам.
            </p>
            <button className={`${styles.button} button`}>
              Найти квартиру
            </button>
          </div>

          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={false}
              breakpoints={{
                1200: {
                  slidesPerView: "auto",
                },
              }}
              navigation={{
                prevEl: arrowPrev.current,
                nextEl: arrowNext.current,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = arrowPrev.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = arrowNext.current;
              }}
              modules={[Navigation]}
              className={styles.swiper}
            >
              <SwiperSlide className={styles.slide}>
                <ProjectCard
                  name={"Batumi View"}
                  slug={"#"}
                  imagePath={"/images/project/1.jpg"}
                  vip
                  label={"sale"}
                  type={"Многофункциональный жилой комплекс"}
                  address={"ул. Леха и Марии Качинские"}
                  deadline={"Декабрь 2022"}
                  priceFrom={"2 700 000"}
                  pricePerSqm={"82 645"}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <ProjectCard
                  name={"Batumi View"}
                  slug={"#"}
                  imagePath={"/images/project/1.jpg"}
                  vip
                  label={"sale"}
                  type={"Многофункциональный жилой комплекс"}
                  address={"ул. Леха и Марии Качинские"}
                  deadline={"Декабрь 2022"}
                  priceFrom={"2 700 000"}
                  pricePerSqm={"82 645"}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <ProjectCard
                  name={"Batumi View"}
                  slug={"#"}
                  imagePath={"/images/project/1.jpg"}
                  vip
                  label={"sale"}
                  type={"Многофункциональный жилой комплекс"}
                  address={"ул. Леха и Марии Качинские"}
                  deadline={"Декабрь 2022"}
                  priceFrom={"2 700 000"}
                  pricePerSqm={"82 645"}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <ProjectCard
                  name={"Batumi View"}
                  slug={"#"}
                  imagePath={"/images/project/1.jpg"}
                  vip
                  label={"sale"}
                  type={"Многофункциональный жилой комплекс"}
                  address={"ул. Леха и Марии Качинские"}
                  deadline={"Декабрь 2022"}
                  priceFrom={"2 700 000"}
                  pricePerSqm={"82 645"}
                />
              </SwiperSlide>

              <div className={styles.arrows}>
                <button
                  ref={arrowPrev}
                  className={`${styles.arrowPrev} button`}
                >
                  <svg
                    width="10"
                    height="15"
                    viewBox="0 0 10 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 1.59998L2.4 7.44998L8.25 13.3"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <button
                  ref={arrowNext}
                  className={`${styles.arrowNext} button`}
                >
                  <svg
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.2 1.59998L7.05 7.44998L1.2 13.3"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
