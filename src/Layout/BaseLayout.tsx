import React, { PropsWithChildren } from "react";
import { Footer, Header } from "../components/organisms";

interface BaseLayoutProps {}

export const BaseLayout = ({
  children,
}: PropsWithChildren<BaseLayoutProps>) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
