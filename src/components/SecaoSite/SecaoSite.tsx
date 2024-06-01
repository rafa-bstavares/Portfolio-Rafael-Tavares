import * as C from "./style"
import { useState } from "react"
import seta from "../../assets/images/Seta.svg"

type Props = {
    taNaTela: boolean,
    id: number,
    img: string,
    fundo: string,
    icone: string
}

export default function SecaoSite({taNaTela, id, img, fundo, icone}: Props){

    const [tela, setTela] = useState<boolean>(taNaTela)
    const [animSair, setAnimSair] = useState<boolean>(false)
    const [animSairFim, setAnimSairFim] = useState<boolean>(false)

    return (
        <C.ContainerGeral style={{backgroundImage: `url(${fundo})`}}>
            <C.ContainerImagem style={{animationName: animSair ? "giroSairImagem" : "", animationDuration: "var(--tempoAnimacao)", animationFillMode: "forwards"}} >
                <C.ImagemSite src={img} />
            </C.ContainerImagem>
            <C.Seta src={seta} onClick={() => {setAnimSair(true)}} style={{transform: "translateX(calc(0.5 * var(--diametroCirculo)))", left: "50%"}} />
            <C.Seta src={seta} onClick={() => {setAnimSair(true)}} style={{ rotate: "-180deg", translate: "calc(-0.5 * var(--diametroCirculo))", right: "50%"}} />
            <C.Circulo></C.Circulo>
            <C.iconeAtual src={icone} style={{left: "5%", top: "7%", transform: `rotate(-20deg)`, width: "var(--larguraIconeGrande)", animationName: `${animSair? "animacaoSairG1" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacao)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={icone} style={{right: "5%", bottom: "3%", transform: "rotateZ(17deg) rotateY(-180deg)", width: "var(--larguraIconeGrande)", animationName: `${animSair? "animacaoSairG2" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacao)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={icone} style={{left: "5%", bottom: "15%", rotate: "10deg", width: "var(--larguraIconeMedio)", animationName: `${animSair? "animacaoSairM1" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacao)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={icone} style={{right: "5%", top: "5%", transform: "rotateZ(-15deg) rotateY(-180deg)", width: "var(--larguraIconeMedio)", animationName: `${animSair? "animacaoSairM2" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacao)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={icone} style={{right: "27%", top: "20%", transform: "rotateZ(-10deg) rotateY(-180deg)", width: "var(--larguraIconeMedio)", animationName: `${animSair? "animacaoSairM3" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacao)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={icone} style={{left: "15%", top: "50%", rotate: "5deg", width: "var(--larguraIconePequeno)", animationName: `${animSair? "animacaoSairP1" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacao)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={icone} style={{left: "35%", top: "5%", transform: "rotate(-24deg)", width: "var(--larguraIconePequeno)", animationName: `${animSair? "animacaoSairP2" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacao)" : ""}`, animationFillMode: "forwards"}}/>
        </C.ContainerGeral>
    )
}


{
    /* 
    Dívida: Preciso fazer um componente pra cada um? 
    Motivo: Cada um vai ter uma animação diferente.
    Possivel Solução 1: exportar o keyframe e usar aqui nesse arquivo cada um em uma instância diferente do componente
    Possível solução 2: fazer as animações no css global e também usar aqui em cada instância uma.
    
    Dúvida: Como vou fazer para a animação ser ativada ao clique?

    Usar o evento onAnimationEnd
    */
}