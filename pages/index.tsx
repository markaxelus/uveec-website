import type { NextPage } from "next";
import { SponsorMarquee } from "../src/components/molecules";
import BaseLayout from "../src/Layout/BaseLayout";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <SponsorMarquee />
    </BaseLayout>
  );
};

export default Home;
