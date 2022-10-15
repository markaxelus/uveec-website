import React, { PropsWithChildren } from "react";
import { Footer } from "../components/organisms/footer";
import { Header } from "../components/organisms/header";

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
