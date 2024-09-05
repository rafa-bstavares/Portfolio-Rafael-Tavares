import styled from "styled-components";


export const ContainerBlur = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const divItemBlur = styled.a`
    font-size: 150px;
    color: #fff;
    animation: animacaoBlur both;
    animation-timeline: view();
    display: flex;
    gap: 20px;
    justify-content: center;
    cursor: pointer
`

export const imgSeta = styled.img`
    width: 60px;
    height: auto;
`