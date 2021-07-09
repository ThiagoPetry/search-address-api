import React, { useState, FormEvent } from 'react';

import { CgSearchFound } from 'react-icons/cg';
import { SiCodeforces } from 'react-icons/si';
import { RiCheckDoubleFill } from 'react-icons/ri';
import { FaCity } from 'react-icons/fa';
import { FaMapMarkedAlt } from 'react-icons/fa';

import api from '../services/api';

import { Title, Repositories, Navbar, Form, Dados, Container, BoxTop, BoxBottom, Zip, Info } from './styles'
import styled from 'styled-components';

interface Consulta {
  bairro: string;
  cidade: string;
  estado: string;
  logradouro: string;
  cep: number;
  cidade_info: {
    area_km2: number;
    codigo_ibge: number;
  };
  estado_info: {
    nome: string;
  };
}

const Consult: React.FC = () => {
  const [novaConsulta, setnovaConsulta] = useState('');
  const [consultas, setConsultas] = useState<Consulta>();

  async function handleAddRepository(event: FormEvent<HTMLFormElement>,): Promise<void> {
    event.preventDefault();

    const response = await api.get<Consulta>(`${novaConsulta}`);
    const consulta = response.data;

    setConsultas(consulta);
    setnovaConsulta('');
  }

  const localMapa = 'https://www.google.com/maps/embed/v1/place?'
                  + 'key=AIzaSyAfiVpJZQQ8UDj47msq0JDXPRkQD9ARCi0'
                  + '&maptype=satellite'
                  + '&zoom=18'
                  + '&q=';

  return (
    <>
      <Navbar>
        <Title>Buscar Endereço por CEP</Title>
      </Navbar>

      <Form onSubmit={handleAddRepository}>
          <input value={novaConsulta} onChange={e => setnovaConsulta(e.target.value)} placeholder="CEP" required/>
          <button type="submit" id="btn"><CgSearchFound size={30} color="#fff"/></button>
      </Form>    

    { consultas ?
      <Repositories id="teste">
        <Container>
          <Zip>
            <p>CEP: {consultas?.cep}</p>
            <RiCheckDoubleFill id="arrow" size={40} />
          </Zip>
          <Dados>
            <BoxTop>
              <strong>{consultas?.estado} - {consultas?.cidade}</strong>
              <p>{consultas?.bairro}, {consultas?.logradouro}</p>
            </BoxTop>
            <BoxBottom>
              <div>
                <FaMapMarkedAlt size={25} color="#2FAACE" />
                <p><b>Área:</b> {consultas?.cidade_info.area_km2}</p>
              </div>
              <div>
                <SiCodeforces size={25} color="#2FAACE" />
                <p><b>IBGE:</b> {consultas?.cidade_info.codigo_ibge}</p>
              </div>
            </BoxBottom>
          </Dados>
          <Zip>
            <p>LOCALIZAÇÃO</p>
            <RiCheckDoubleFill id="arrow" size={40} />
          </Zip>
          <Dados>
          <iframe 
            width="700" 
            height="450" 
            frameBorder="0" 
            loading="lazy" 
            src={localMapa + consultas?.cep}>
          </iframe>
          </Dados>
        </Container>      
      </Repositories>
    :
      <Info>
        <FaCity size={100} color="#8a8a8a" opacity="0.5"/>
      </Info>
    }
    </>
  );
};

export default Consult;