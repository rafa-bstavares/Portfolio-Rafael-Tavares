import * as C from "./style"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import seta from "../../assets/images/Seta.svg"
import imgImmobiliare from "../../assets/images/immobiliare.png"
import fundoImmobiliare from "../../assets/images/fundoImmobiliare.jpg"
import iconeCasa from "../../assets/images/CasaPngComprimida.png"
import imgCriadores from "../../assets/images/imgCriadores.png"
import fundoCriadores from "../../assets/images/fundoCriadores.jpg"
import iconeCriadores from "../../assets/images/iconeCriadores.png"

type Props = {
    taNaTela: boolean,
    img: string,
    fundo: string,
    icone: string
}

export default function SecaoSite({taNaTela, img, fundo, icone}: Props){

    const [IdxParNaTela, setIdxParNaTela] = useState<boolean>(true)
    const [animSair, setAnimSair] = useState<boolean>(false)
    const [girarEsquerda,setGirarEsquerda] = useState<boolean>(false)
    const [animSairFim, setAnimSairFim] = useState<boolean>(false)
    const [imgIdxPar, setImgIdxPar] = useState<string>()
    const [imgIdxImpar, setImgIdxImpar] = useState<string>()
    const [id, setId] = useState(0)
    const [carregouAgora, setCarregouAgora] = useState(true)

    const arrSites = [
        {img: imgImmobiliare, fundo: fundoImmobiliare, icone: iconeCasa},
        {img: imgCriadores, fundo: fundoCriadores, icone: iconeCriadores}
    ]

    useEffect(() => {
        setImgIdxPar(arrSites[0].img)
    }, [])



    function cliqueSetaDireita(){
        if(id < arrSites.length - 1){
            setAnimSair(true)
            setId(id + 1)
        }
    }

    function cliqueSetaEsquerda(){
        if(id > 0){
            setAnimSair(true)
            setId(id - 1)
        }
    }

    useEffect(() => {
        console.log(!carregouAgora)

        if(!carregouAgora){
            console.log(id)
            if(IdxParNaTela){
                setImgIdxImpar(arrSites[id].img)
                setIdxParNaTela(false)
            }else{
                setImgIdxPar(arrSites[id].img)
                setIdxParNaTela(true) 
            }
        }
        setCarregouAgora(false)

    }, [id])

    return (
        <C.ContainerGeral style={{backgroundImage: `url(${fundo})`}}>
            <C.ContainerImagem style={{animationName: animSair ? "giroAntiHorImagem" : "", animationDuration: "calc(1.5 * var(--tempoAnimacaoIcone))", animationFillMode: "forwards"}} >
                <C.ImagemSite src={imgIdxPar} />
                <C.ImagemSite src={imgIdxImpar} style={{transform: "rotate(180deg)"}}/>
            </C.ContainerImagem>
            <C.Seta src={seta} onClick={cliqueSetaDireita} style={{transform: "translateX(calc(0.5 * var(--diametroCirculo)))", left: "50%"}} />{/* Seta direita */}
            <C.Seta src={seta} onClick={cliqueSetaEsquerda} style={{ rotate: "-180deg", translate: "calc(-0.5 * var(--diametroCirculo))", right: "50%"}} />{/* Seta esquerda */}
            <C.Circulo></C.Circulo>
            <C.iconeAtual src={icone} style={{left: "5%", top: "7%", transform: `rotate(-20deg)`, width: "var(--larguraIconeGrande)", animationName: `${animSair? "animacaoSairG1" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={icone} style={{right: "5%", bottom: "3%", transform: "rotateZ(17deg) rotateY(-180deg)", width: "var(--larguraIconeGrande)", animationName: `${animSair? "animacaoSairG2" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={icone} style={{left: "5%", bottom: "15%", rotate: "10deg", width: "var(--larguraIconeMedio)", animationName: `${animSair? "animacaoSairM1" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={icone} style={{right: "5%", top: "5%", transform: "rotateZ(-15deg) rotateY(-180deg)", width: "var(--larguraIconeMedio)", animationName: `${animSair? "animacaoSairM2" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={icone} style={{right: "27%", top: "20%", transform: "rotateZ(-10deg) rotateY(-180deg)", width: "var(--larguraIconeMedio)", animationName: `${animSair? "animacaoSairM3" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={icone} style={{left: "15%", top: "50%", rotate: "5deg", width: "var(--larguraIconePequeno)", animationName: `${animSair? "animacaoSairP1" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={icone} style={{left: "35%", top: "5%", transform: "rotate(-24deg)", width: "var(--larguraIconePequeno)", animationName: `${animSair? "animacaoSairP2" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
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