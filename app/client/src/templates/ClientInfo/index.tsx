import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container } from './styles';

import { IClient } from '../../interface/clients.interface';

const ClientInfo: React.FC = () => {
  const [clientInfo, setClientInfo] = useState<IClient | null>();

  useEffect(() => {
    const email = 'client@gmail.com';
    const getDataInfo = async () => {
      const info = await axios.get(`http://localhost:3001/client/${ email }`)
      .then((response) => response)
      .catch((error) => error);
      if(info.message) {
        return;
      }
      setClientInfo(info.data.client);
      return info.data;
    }
    getDataInfo();
  }, []);

  return (
    <Container>
      <h1>Informações do Cliente</h1>
      {
        clientInfo
        && (
          <article>
            <p>Nome: { clientInfo?.clientName }</p>
            <p>Gênero: { clientInfo?.genre }</p>
            <p>Nascimento: { clientInfo?.birthday }</p>
            <p>Naturalidade: { clientInfo?.naturalness }</p>
          </article>
        )
      }
    </Container>
  );
}

export default ClientInfo;
