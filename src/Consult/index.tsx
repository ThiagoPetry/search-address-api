import React, { useState, FormEvent, MouseEvent } from 'react';

import { CgSearchFound } from 'react-icons/cg';
import { SiCodeforces } from 'react-icons/si';
import { RiCheckDoubleFill } from 'react-icons/ri';
import { FaMapMarkedAlt, FaCity } from 'react-icons/fa';

import { Flags } from './flags';
import api from '../services/api';

import { Title, Repositories, Navbar, Form, Dados, Container, BoxTop, BoxBottom, Zip, Info, Search, Mapa, BoxFlag } from './styles'

const localMapa = 'https://www.google.com/maps/embed/v1/place?'
                  + 'key=AIzaSyAfiVpJZQQ8UDj47msq0JDXPRkQD9ARCi0'
                  + '&maptype=satellite'
                  + '&zoom=18'
                  + '&q=';

interface TypeFlag {
  estado: string;
}

interface Consulta {
  bairro: string;
  cidade: string;
  estado: TypeFlag;
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
  const [bandeira, setBandeira] = useState('');

  async function handleAddRepository(event: FormEvent<HTMLFormElement>,): Promise<void> {
    event.preventDefault();

    const response = await api.get<Consulta>(`${novaConsulta}`);
    const consulta = response.data;

    setConsultas(consulta);
    setnovaConsulta('');

    for(var x = 0; x < Flags.length; x++) {
      if(String(consulta?.estado) === Flags[x].uf) {
        setBandeira(Flags[x].link);       
      }
    }
  }

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
      <Repositories>
        <Container>
          <Search>
            <Zip>
              <p>CEP: {consultas?.cep}</p>
              <RiCheckDoubleFill id="starOutline" size={35} name="sad" />
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
              <BoxFlag>
                <img src={bandeira} />
                <strong>{consultas?.estado_info.nome}</strong>
              </BoxFlag>
            </Dados>
          </Search>
          <Mapa>
            <Zip>
              <p>LOCALIZAÇÃO</p>
            </Zip>
            <Dados>
              <iframe 
                width="600" 
                height="400" 
                frameBorder="0" 
                loading="lazy" 
                src={localMapa + consultas?.cep}>
              </iframe>
            </Dados>
          </Mapa>
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