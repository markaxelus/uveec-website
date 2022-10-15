import React, { PropsWithChildren } from "react";
import { Header } from "../components/molecules/header";
import { Footer } from "../components/molecules/footer";

interface BaseLayoutProps {}

function BaseLayout({ children }: PropsWithChildren<BaseLayoutProps>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default BaseLayout;
