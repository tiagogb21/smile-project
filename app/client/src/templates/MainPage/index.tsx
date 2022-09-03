import React from "react";

import Header from "../../components/Header";
import MainContent from "../../components/MainContent";
import Footer from "../../components/Footer";
import LeftAside from "../../components/LeftAside";

import { Container } from './styles';
import Calculator from '../../components/Calculator';
import { useAppSelector } from '../../redux/store/hooks';

const MainPage: React.FC = () => {
  const { buttonClose } = useAppSelector(state => state.buttonClose);



  return (
    <Container>
      <Header />
      <section className="principal__content">
        <LeftAside />
        <MainContent />
        {
          !buttonClose && <Calculator />
        }
      </section>
      <Footer />
    </Container>
  );
};

export default MainPage;
