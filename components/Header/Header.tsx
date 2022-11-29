import styles from "./Header.module.scss";
import React from "react";
import Link from "next/link";
import Search from "../Search/Search";
import Socials from "../Socials/Socials";
import Phone from "../Phone/Phone";
import MainMav from "../Navs/MainNav";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={`${styles.border} flex-1 md:flex-auto`}>
          <div className="md:container">
            <div className={styles.top}>
              <div className={styles.logo}>
                <Link href={"/"}>
                  Welcome<span>Batumi</span>
                </Link>
              </div>
              <p className={styles.description}>
                Подбор и помощь при покупке <br /> недвижимости в Батуми
              </p>

              <div className="hidden md:block flex-1 xl:mx-11">
                <Search />
              </div>

              <div className="hidden xl:flex gap-4">
                <Socials />
                <Phone darkTheme={false} align={"right"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.border}>
          <div className="md:container">
            <div className={styles.bottom}>
              <div className="hidden xl:block">
                <MainMav />
              </div>
              <div className={styles.buttons}>
                <div className="hidden md:block">
                  <button
                    className={
                      "buttonLight py-1.5 px-2.5 flex flex items-center gap-2"
                    }
                  >
                    <svg
                      width="10"
                      height="16"
                      viewBox="0 0 10 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 0C2.2382 0 0 2.2388 0 5C0 9.774 5 16 5 16C5 16 10 9.774 10 5C10 2.2388 7.7614 0 5 0ZM5 7.76C3.5086 7.76 2.3 6.5512 2.3 5.06C2.3 3.5688 3.5086 2.36 5 2.36C6.491 2.36 7.7 3.5688 7.7 5.06C7.7 6.5512 6.491 7.76 5 7.76Z"
                        fill="#0065D9"
                      />
                    </svg>
                    На карте
                  </button>
                </div>
                <button className={"button py-1.5 px-2.5"}>
                  Поиск квартир
                </button>
              </div>
              <div className="xl:hidden">
                <button className={`${styles.burgerButton} iconButton`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
