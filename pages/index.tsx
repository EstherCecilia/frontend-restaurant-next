import type { NextPage } from "next";
import Header from "../src/components/Header";
import Menu from "../src/containers/Menu";
import Logo from "../src/components/Logo";
import Footer from "../src/components/Footer";
import AdditionalInformation from "../src/components/Information";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="m-0 text-center text-medium-brown font-body">
      <Header />
      <Menu />
      <Logo />
      <AdditionalInformation />
      <Footer />
    </div>
  );
};

export default Home;
