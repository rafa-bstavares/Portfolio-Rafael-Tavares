import styled from "styled-components";

export const divGeralSecaoSite = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

export const ElemGrad1 = styled.div`
    height: 150px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(#0c0219, transparent);
    z-index: 100000000000;
`

export const ElemGrad2 = styled.div`
    height: 150px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, #0c0219);
    z-index: 100000;
`

export const divGeralSecaoBlur = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #0c0219;
    padding: 100px 0;
    min-height: 100vh;
    align-items: center;
`

export const divGeralSecaoCartas = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
`

export const divGeralSecaoBanner = styled.div`
    display: flex;
    background-color: #0000ff; 
`

export const imgTeste = styled.img`
    width: 600px;
    height: auto;
`


