import styled from "styled-components";

export const ContainerSecaoCartas = styled.div`
    width: 90%;
    position: relative;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
`

export const ContainerCartasTotais = styled.div`
    position: relative;
`
export const ContainerCartasSobre = styled.div`
    display: flex;
    gap: 60px;
    flex-wrap: wrap;
`

export const ContainerCartas = styled.div`
    display: flex;
    gap: 60px;
    position: absolute;
    top: 0;
    left: 0;
    flex-wrap: wrap;
`

export const Carta = styled.div`
    width: 25%;
    border-radius: 20px;
    border: 2px solid #888;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 40px;
    gap: 20px;
    color: #fff;
`

export const imgCarta = styled.img`
    width: 60%;
    height: auto;
`

export const nome = styled.div`
    padding: 10px 0;
    border-radius: 15px;
    border: 2px solid #888;
    display: flex;
    justify-content: center;
    background-color: #222;
    width: 100%;
    font-weight: bold;
    font-size: 25px;
`

export const CartaSobre = styled.div`
    width: 25%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 40px;
    gap: 20px;
    color: #fff;
`

export const nomeSobre = styled.div`
    padding: 10px 0;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: bold;
    font-size: 25px;
`
