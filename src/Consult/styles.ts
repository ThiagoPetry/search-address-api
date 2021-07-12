import styled from 'styled-components';
import { shade } from 'polished';

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  background: #06153c;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.4);
`;

export const Title = styled.h1`
  font-size: 1.4em;
  color: #fff;
  max-width: 1000px;
  padding: 10px;
  text-align: center;
  text-shadow: 0px 0px 5px rgb(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  font-size: 1em;
  margin-top: 30px;

  display: flex;
  justify-content: center;

  input {
    flex: 1;
    max-width: 220px;
    height: 50px;
    padding: 0 24px;
    background-color: #ededed;
    border: 0;
    font-size: 1em;
    font-weight: bold;
    border-bottom: 3px solid #8f8f8f;
    color: #8f8f8f;
  }

  button {
    border: 0;
    padding: 8px 10px 6px 10px;
    background-color: #10a108;
    border-radius: 10px;
    margin-left: 20px;
    box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.2);

    transition: all 0.2s;

    &:hover {
      background: ${shade(0.1, '#10a108')};
    }


      &:active + #teste {
        display: block;
      }

  }
`;

export const Repositories = styled.div`
  margin-top: 0px;
  margin-bottom: 60px;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  flex-direction: row;
  text-align: center;
  margin-top: 40px;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-right: 20px;
`;

export const Mapa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Zip = styled.div`
  background-color: #15295c;
  border-radius: 10px 10px 0px 0px;

  width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  z-index: 99;

  #starOutline {
    color: #fff;

    &:hover {
      color: #ffd500;
      cursor: pointer;
    }    
  }

  p {
    padding: 10px;
    font-size: 0.6em;
    font-weight: bold;
    color: #fff;
    text-align: left;
    margin-left: 15px;
    margin-right: 400px;
    text-shadow: 0px 0px 5px rgb(0, 0, 0, 0.2);
  }
`;

export const Dados = styled.div`
  width: 600px;
  height: 340px;
  
  display: flex;
  justify-content: center;
  flex-direction: column;  

  box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.3);
  border-radius: 0px 0px 10px 10px;
  padding: 10px;

  transition: all 0.4s;
  
  &:hover {
    box-shadow: 0px 0px 60px rgb(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

export const BoxTop = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  strong {
    font-size: 1.2em;
    color: #282828;
    text-shadow: 0px 0px 6px rgb(0, 0, 0, 0.2);
  }

  p {
    max-width: 100%;
    font-size: 1em;
    color: #282828;
    margin-top: 10px;
    text-shadow: 0px 0px 6px rgb(0, 0, 0, 0.2);
  }
`;

export const BoxBottom = styled.div`
  display: flex;
  justify-content: center;

  div {
    width: 260px;
    margin-top: 15px;

    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    text-align: center;

    p {
      font-size: 0.8em;
      margin-left: 10px;
      color: #282828;
      text-shadow: 0px 0px 6px rgb(0, 0, 0, 0.2);

      b {
        color: #2FAACE;
      }
    }
  }
`;

export const BoxFlag = styled.div`
  width: 100%;
  height: 140px;
  margin-top: 5px;
  
  display: flex;
  justify-content: center;
  flex-direction: column;

  img {
    width: 20%;
    margin-top: 30px;
    margin-left: 40%;
  }

  strong {
    margin-top: 15px;
    font-size: 1em;
    color: #282828;
    text-transform: uppercase;
    text-shadow: 0px 0px 6px rgb(0, 0, 0, 0.2);
  }
`;

export const Info = styled.div`
  width: 100%;
  margin-top: 150px;
  
  display: flex;
  justify-content: center;
`;