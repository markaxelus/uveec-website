import Image from "next/image";
import type { NextPage } from "next";
import { SponsorMarquee } from "../src/components/molecules";
import { BaseLayout } from "../src/Layout/BaseLayout";
import { medium_lorem } from "../src/constants";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <SponsorMarquee />
      <section className="relative h-96 w-full p-4">
        <Image src="/gif/filtration.gif" layout="fill" />
        <div className="relative h-full w-full">
          <div className="absolute inset-y-16 right-20 w-96">
            <h1 className="text-white font-bold text-4xl text-right ">
              Our Team
            </h1>
            <p className="text-white text-xl text-right">{medium_lorem}</p>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Home;
