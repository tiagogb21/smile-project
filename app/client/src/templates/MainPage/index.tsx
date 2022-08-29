import React from "react";

import Header from "../../components/Header";
import MainContent from "../../components/MainContent";
import Footer from "../../components/Footer";
import LeftAside from "../../components/LeftAside";

import "./styles.css";

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <section className="principal__content">
        <LeftAside />
        <MainContent />
      </section>
      <Footer />
    </>
  );
};

export default MainPage;
