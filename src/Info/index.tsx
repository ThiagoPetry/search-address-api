import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';
import { SiCodeforces } from 'react-icons/si';
import { FaMapMarkedAlt } from 'react-icons/fa';

import api from '../services/api';

import { Title, Navbar } from '../Consult/styles'

import { Header, RepositoryInfo, Card, CardTitle, BoxBottom, BoxTop, Dados } from './styles' ;

interface CepParams {
  cep: string;
}

interface Estado {
  estado: string;
  estado_info: {
    area_km2: string;
    codigo_ibge: number,
    nome: string;
  }
}

const Info: React.FC = () => {
    const [novaConsulta, setnovaConsulta] = useState<Estado | null>(null);
    const [mapa, setMapa] = useState(() => {
        const storageBandeira = localStorage.getItem('@Mapa:estado');
    
          if(storageBandeira) {
            return JSON.parse(storageBandeira);
          }
    
        return '';
    
      });

    const { params } = useRouteMatch<CepParams>();

    useEffect(() => {
        api.get(`${params.cep}`).then((response => {
        setnovaConsulta(response.data);
        }))
    }, [params.cep]);

  return (
    <>
        <Navbar>
            <Title>Buscar Endereço por CEP</Title>
        </Navbar>

        <Header>
            <h1>Informações sobre o estado:</h1>
            <Link to="/">
                <FiChevronLeft size={16}/>
                Voltar
            </Link>
        </Header>
        {novaConsulta ? 
            <RepositoryInfo>
                <Card>
                    <CardTitle>
                        <h1>{novaConsulta.estado} - {novaConsulta.estado_info.nome}</h1>
                    </CardTitle>
                    <Dados>
                        <BoxTop>
                            <img src={mapa} />
                        </BoxTop>
                        <BoxBottom>
                            <div>
                              <FaMapMarkedAlt size={25} color="#2FAACE" />
                              <p><b>Área:</b>{novaConsulta.estado_info.area_km2}</p>
                            </div>
                            <div>
                              <SiCodeforces size={25} color="#2FAACE" />
                              <p><b>IBGE:</b>{novaConsulta.estado_info.codigo_ibge}</p>
                            </div>
                        </BoxBottom>
                    </Dados>
                </Card>
            </RepositoryInfo>
        : <h1>test</h1>}
    </>
  );
};

export default Info;
