import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { ImUser } from "react-icons/im";
import { BiWinkSmile } from "react-icons/bi";

import { Container } from './styles';
import { useAppDispatch } from '../../redux/store/store';
import { toggleAside } from '../../redux/reducers/asideReducer';

const Header: React.FC = () => {
  const [verifyAside, setVerifyAside] = useState(true);

  const dispatch = useAppDispatch();

  const clickOpenCloseAside = () => {
    setVerifyAside(!verifyAside);
    return dispatch(toggleAside(verifyAside));
  };

  const clickOpenCloseUser = () => {
    return "b";
  };

  return (
    <Container>

      <button className="btn-menu" type="button" onClick={clickOpenCloseAside}>
        <GiHamburgerMenu />
      </button>

      <h1 className="title-smile">
        <BiWinkSmile className="logo-title-smile" />
        <span>SMI</span>
        <span>LE</span>
      </h1>

      <button className="btn-user" type="button" onClick={clickOpenCloseUser}>
        <ImUser />
      </button>
    </Container>
  );
};

export default Header;
