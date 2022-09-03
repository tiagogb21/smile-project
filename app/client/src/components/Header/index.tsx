import React, { useState } from "react";

import { useAppDispatch } from '../../redux/store/store';

import { toggleAside } from '../../redux/reducers/asideReducer';

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BiWinkSmile } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

import Image from '../../assets/dentist.png';
import { useNavigate } from 'react-router-dom';

const headerTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(1, 240, 175)'
      ,
    },
    secondary: {
      main: '#03a9f4',
    },
  },
});

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      height: '30vh',
      display: 'flex',
      alignItems: 'flex-start',
      paddingTop: '12px',
  },
  teste: {
    fontSize: '18px',
    fontWeight: '600',
    color: 'rgb(90, 90, 140)',
  },
  te: {
    marginTop: '7px',
  },
  te2: {
    fontSize: '24px',
  }
}

const Header: React.FC = () => {
  const [verifyAside, setVerifyAside] = useState(true);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const clickOpenCloseAside = () => {
    setVerifyAside(!verifyAside);
    return dispatch(toggleAside(verifyAside));
  };

  const clickOpenCloseUser = () => {
    return "b";
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={ headerTheme }>
        <AppBar position="static">
          <Toolbar style={ styles.paperContainer }>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              style={ { ...styles.teste, ...styles.te2 } }
              onClick={clickOpenCloseAside}
            >
              <GiHamburgerMenu />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={ { ...styles.teste, ...styles.te } }
            >
              <BiWinkSmile />
              SMILE
            </Typography>

            <Button
              color="inherit"
              onClick={clickOpenCloseUser}
              style={ styles.teste }
            >
              Login
            </Button>

            <Button
              color="inherit"
              onClick={clickOpenCloseUser}
              style={ styles.teste }
            >
              Cadastrar
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
};

export default Header;
