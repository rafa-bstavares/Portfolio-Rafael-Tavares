import styled from "styled-components";

export const ContainerGeral = styled.div`
    position: absolute;
    inset: 0;
`

export const Circulo = styled.div`
    width: var(--diametroCirculo);
    height: var(--diametroCirculo);
    border-radius: 100%;
    border: 5px solid #fff;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 80%);
    z-index: 60;
`

export const ContainerImagem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    height: calc((2*var(--larguraImagemSites)*9/16) + 1.8*(var(--diametroCirculo)));
    top: calc(100vh - 0.6*var(--diametroCirculo) - (var(--larguraImagemSites)*9/16));
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
`
export const Fundo2 = styled.div`
    position: absolute;
    inset: 0;
    transition: all var(--tempoAnimacaoIcone) linear;
`

export const ImagemSite = styled.img`
    width: var(--larguraImagemSites);
    height: auto;
    bottom: calc(0.6 * var(--diametroCirculo));
`



export const Seta = styled.img`
    width: calc(0.12 * var(--diametroCirculo));
    height: auto;
    position: absolute;
    bottom: calc(0.2 * var(--diametroCirculo));
    cursor: pointer;
    z-index: 1000000;
`


export const iconeAtual = styled.img`
    position: absolute;
`

