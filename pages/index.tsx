import { MainLayout } from "../layouts/MainLayout";
import MainHero from "../components/MainHero/MainHero";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import PromoSection from "../components/PromoSection/PromoSection";

export default function Home() {
  return (
    <MainLayout>
      <>
        <div className={"mb-15 md:mb-20"}>
          <MainHero />
        </div>

        <div className={"mb-15 md:mb-20"}>
          <CategoriesSection />
        </div>

        <div className={"mb-15 md:mb-10"}>
          <PromoSection />
        </div>
      </>
    </MainLayout>
  );
}
