import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

import { Container, Form } from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { validateEmail, validatePassword } from '../../service/function';
import { addEmailToRegister, addNameToRegister, addPasswordToRegister } from '../../redux/reducers/registerReducer';

const Register: React.FC = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [controlInput, setControlInput] = useState(true);
  const [showPassword, setShowPassword] = useState('password');
  const [showInputMessage, setShowInputMessage] = useState('Mostrar password');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { name, email, password } = useAppSelector(state => state.register);

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
    const isButtonDisabled = validateEmail(email) && validatePassword(password) && password === confirmPassword;
    setButtonDisabled(!isButtonDisabled);
  }, [email, password, confirmPassword]);

  return (
    <Container>
      <Form action="">
        <h1>CADASTRO</h1>
        {/* Name */}
        <label htmlFor="input-name-register" className="label-info-login">
          Nome
          <input
            id="input-email"
            type="email"
            value={ name }
            onChange={(e) => {
              dispatch(addNameToRegister(e.target.value))
            } }
            placeholder="Digite seu email"
            required
          />
        </label>

        {/* Email */}
        <label htmlFor="input-email-register" className="label-info-login">
          Email
          <input
            id="input-email"
            type="email"
            value={ email }
            onChange={(e) => {
              dispatch(addEmailToRegister(e.target.value))
            } }
            placeholder="Digite seu email"
            required
          />
        </label>

        {/* Password */}
        <label htmlFor="input-password-register" className="label-info-login">
          Password
          <input
            id="input-password"
            type={showPassword}
            value={ password }
            onChange={(e) => {
              dispatch(addPasswordToRegister(e.target.value))
            } }
            placeholder="********"
            required
          />
        </label>

        <label
          htmlFor="input-check-password-register"
          className="label-info-login"
        >
          Confirmar Password
          <input
            id="input-password"
            type={showPassword}
            value={ confirmPassword }
            onChange={(e) => {
              setConfirmPassword(e.target.value)
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

        {/* LOGIN */}
        <a href="/" className="navigate-register">
          <span>Fazer login</span>
        </a>

      </Form>
    </Container>
  );
}

export default Register;
