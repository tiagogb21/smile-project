import React from 'react';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login';
import { CLIENT_ID } from '../../utils/data';

import { Container } from './styles';

const GoogleButton: React.FC = () => {
  const onSuccess = (res: GoogleLoginResponseOffline | GoogleLoginResponse | any) => {
    const data = JSON.stringify(res?.profileObj);
    const { imageUrl, email, name } = JSON.parse(data);
    console.log(imageUrl, email, name);
  }

  const onFailure = (res: GoogleLoginResponseOffline | GoogleLoginResponse) => {
    console.log(`LOGIN FAILED! ${ JSON.parse(JSON.stringify(res)) }`);
  }

  return (
    <Container id="sign-in-btn">
      <GoogleLogin
        clientId={ CLIENT_ID }
        buttonText="Login"
        onSuccess={ onSuccess }
        onFailure={ onFailure }
        cookiePolicy={'single_host_origin'}
        isSignedIn={ true }
      />
    </Container>
  );
}

export default GoogleButton;
