import React from 'react';

import {
  Container,
  PersonalForm,
  PersonalData,
  ContactInfo,
  AddressInfo,
  ButtonBox
} from './styles';

const RegisterPatient: React.FC = () => {
  return (
    <Container>

      <h3 className="h3-title">Cadastro de cliente</h3>

      <PersonalForm>
        <PersonalData>
          <legend>Dados Pessoais</legend>
          <article className="box__container">
            <label htmlFor="">
              Nome completo
              <input type="text" />
            </label>
            <article className="box__input-genre">
              <p>Sexo</p>
              <select name="" id="">
                <option value="">Masculino</option>
                <option value="">Feminino</option>
              </select>
            </article>
            <label htmlFor="">
              Data nascimento
              <input type="date" />
            </label>
          </article>
          <article className="box__container">
            <label htmlFor="">
              Naturalidade
              <input type="text" />
            </label>
            <label htmlFor="">
              Profissão
              <input type="text" />
            </label>
            <label htmlFor="">
              Estado civil
              <input type="text" />
            </label>
          </article>
        </PersonalData>
        <ContactInfo>
          <legend>Contato</legend>
          <label htmlFor="">
            Celular
            <input type="tel" />
          </label>
          <label htmlFor="email">
            Email
            <input type="text" />
          </label>
        </ContactInfo>
        <AddressInfo>
          <legend>Endereço</legend>
          <label htmlFor="">
            CEP
            <input type="text" />
          </label>
          <label htmlFor="">
            Estado
            <input type="text" />
          </label>
          <label htmlFor="">
            Cidade
            <input type="text" />
          </label>
        </AddressInfo>
      </PersonalForm>
      <ButtonBox>
        <button
          className="btn-back"
          type="button"
        >
          voltar
        </button>
        <button
          className="btn-save"
          type="button"
        >
          salvar
        </button>
      </ButtonBox>
    </Container>
  );
}

export default RegisterPatient;
