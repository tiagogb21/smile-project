import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Button from '../../components/Button';

import { Container, AdminMain, FormField } from './styles';

const AdminPage: React.FC = () => {
  const handleClick = () => 'A';

  return (
    <Container>
      <Header />
      <AdminMain>
      <h1>Cadastrar Usuário</h1>
      <FormField>
        <label htmlFor="admin-input-name">
          Nome
          <input
            id="admin-input-name"
            type="text"
          />
        </label>
        <label htmlFor="admin-input-email">
          Email
          <input
            id="admin-input-email"
            type="email"
          />
        </label>
        <label htmlFor="admin-input-password">
          Senha
          <input
            id="admin-input-password"
            type="password"
          />
        </label>
        <Button
          label="Criar Usuário"
          onClick={handleClick}
          disabled={true}
        />
        <fieldset>
          <legend>Lista de Usuários</legend>
          <table>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </table>
        </fieldset>
      </FormField>
      </AdminMain>
      <Footer />
    </Container>
  );
}

export default AdminPage;
