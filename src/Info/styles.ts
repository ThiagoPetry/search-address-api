import styled from "styled-components";

export const Header = styled.header`    
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 40px;

    h1 {
        margin-left: 60px;
        font-size: 3vh;
        text-transform: uppercase;
    }

    a {
        margin-right: 60px;

        display: flex;
        align-items: center;

        text-decoration: none;
        text-transform: uppercase;
        color: #282828;
        transition: color 0.2s;
        font-size: 2vh;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 0.4vw;
        }
    }
`;

export const RepositoryInfo = styled.div`
    width: 100%;
    margin-top: 60px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 40.5%;
    margin-right: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

export const CardTitle = styled.div`
    background-color: #06153c;
    border-radius: 10px 10px 0px 0px;

    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    z-index: 99; 

    h1 {
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

    background: #fff;
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

    img {
        display: flex;
        width: 290px;
        height: 260px;

        border-radius: 10px;

        background-size: cover;
        object-fit: cover;
        object-position: top;
    }
`;

export const BoxBottom = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;

    div {
        width: 260px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;

        p {
            font-size: 0.8em;
            color: #282828;
            text-shadow: 0px 0px 6px rgb(0, 0, 0, 0.2);
            
            b {
                margin-right: 10px;
            }
        }
    }
`;