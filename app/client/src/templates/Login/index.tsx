import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

import { Container, Form } from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { addEmailToLogin, addPasswordToLogin } from '../../redux/reducers/loginReducer';
import { validateEmail, validatePassword } from '../../service/function';

const Login: React.FC = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [controlInput, setControlInput] = useState(true);
  const [showPassword, setShowPassword] = useState('password');
  const [showInputMessage, setShowInputMessage] = useState('Mostrar password');

  const { email, password } = useAppSelector(state => state.login);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main');
  }

  const handleChangeMessage = () => {
    setShowPassword(controlInput ? 'text' : 'password');
    setShowInputMessage(controlInput ? 'Mostrar password' : 'Esconder password');
    setControlInput(!controlInput);
  }

  useEffect(() => {
    const isButtonDisabled = validateEmail(email) && validatePassword(password);
    setButtonDisabled(!isButtonDisabled);
  }, [email, password]);

  return (
    <Container>
      <Form action="">
        {/* Email */}
        <label htmlFor="input-email" className="label-info-login">
          Email
          <input
            id="input-email"
            type="email"
            value={ email }
            onChange={(e) => {
              dispatch(addEmailToLogin(e.target.value))
            } }
            placeholder="Digite seu email"
            required
          />
        </label>
        {/* Password */}
        <label htmlFor="input-password" className="label-info-login">
          Password
          <input
            id="input-password"
            type={showPassword}
            value={ password }
            onChange={(e) => {
              dispatch(addPasswordToLogin(e.target.value))
            } }
            placeholder="********"
            required
          />
        </label>

        <label htmlFor="" className="label-show-input">
          <input type="checkbox" onChange={ handleChangeMessage }/>
          { showInputMessage }
        </label>

        {/* Enter */}
        <Button
          label="Entrar"
          onClick={ handleClick }
          disabled={ buttonDisabled }
        />
        {/* Register */}

        <a href="" className="navigate-register">
          <span>Criar conta</span>
        </a>

      </Form>
    </Container>
  );
}

export default Login;
