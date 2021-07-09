import styled from 'styled-components';
import { shade } from 'polished';

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  background: #2FAACE;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.4);
`;

export const Title = styled.h1`
  font-size: 1.6em;
  color: #fff;
  max-width: 1000px;
  padding: 20px;
  text-align: center;
  text-shadow: 0px 0px 5px rgb(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  font-size: 1em;
  margin-top: 60px;

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
    background-color: #2FAACE;
    border-radius: 10px;
    margin-left: 20px;
    box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.2);

    transition: all 0.2s;

    &:hover {
      background: ${shade(0.1, '#2FAACE')};
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
  align-items: center;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  margin-top: 60px;
`;

export const Zip = styled.div`
  width: 740px;
  background-color: #2FAACE;
  border-radius: 10px 10px 0px 0px;
  
  display: flex;
  flex-direction: row;
  z-index: 99;
	bottom: 0;

  #arrow {
    color: #fff;

    &:hover {
      color: #0eed25;
      cursor: pointer;
    }
  }

  p {
    padding: 10px;
    font-size: 0.6em;
    font-weight: bold;
    color: #fff;
    text-align: left;
    margin-right: 530px;
    text-shadow: 0px 0px 5px rgb(0, 0, 0, 0.2);
  }
`;

export const Dados = styled.div`
  width: 700px;
  margin-bottom: 40px;
  
  display: flex;
  justify-content: center;
  flex-direction: column;  

  box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.3);
  border-radius: 0px 0px 10px 10px;
  padding: 20px;

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
    font-size: 1em;
    color: #282828;
    text-shadow: 0px 0px 6px rgb(0, 0, 0, 0.2);
  }

  p {
    max-width: 100%;
    font-size: 0.8em;
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

export const Info = styled.div`
  width: 100%;
  margin-top: 100px;
  
  display: flex;
  justify-content: center;
`;