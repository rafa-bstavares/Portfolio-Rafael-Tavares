import * as C from "./style"
import { useEffect, useState } from "react"
import seta from "../../assets/images/Seta.svg"
import imgImmobiliare from "../../assets/images/immobiliare.png"
import fundoImmobiliare from "../../assets/images/fundoImmobiliare5.jpg"
import iconeCasa from "../../assets/images/CasaPngComprimida.png"
import imgCriadores from "../../assets/images/imgCriadores.png"
import fundoCriadores from "../../assets/images/fundocriadores4.jpg"
import iconeCriadores from "../../assets/images/iconeCriadores.png"
import imgStudio from "../../assets/images/imgStudio.png"
import fundoStudio from "../../assets/images/fundostudio4.jpg"
import iconeStudio from "../../assets/images/iconeStudio.png"

type Props = {
    taNaTela: boolean,
}

export default function SecaoSite({}: Props){

    const [animSair, setAnimSair] = useState<boolean>(false)
    const [girarAntiHor,setGirarAntiHor] = useState<boolean>(false)
    const [girarHorario,setGirarHorario] = useState<boolean>(false)
    //const [animSairFim, setAnimSairFim] = useState<boolean>(false)
    const [imgFixa, setImgFixa] = useState<string>()
    const [iconeFixo, setIconeFixo] = useState<string>()
    const [imgProvisoria, setImgProvisoria] = useState<string>()
    const [iconeProvisorio, setIconeProvisorio] = useState<string>()
    const [id, setId] = useState(0)
    const [carregouAgora, setCarregouAgora] = useState(true)
    const [fundo2On, setFundo2On] = useState<boolean>(false)
    const [fundo2, setFundo2] = useState<string>()
    const [fundo, setFundo] = useState<string>()

    //const ref1 = useRef<HTMLImageElement>(null)

    const arrSites = [
        {img: imgImmobiliare, fundo: fundoImmobiliare, icone: iconeCasa},
        {img: imgCriadores, fundo: fundoCriadores, icone: iconeCriadores},
        {img: imgStudio, fundo: fundoStudio, icone: iconeStudio},
    ]

    let cliques = 0

    useEffect(() => {
        setImgFixa(arrSites[0].img)
        setIconeFixo(arrSites[0].icone)
        setFundo(arrSites[0].fundo)
    }, [])


    function confereFundo(quantCliques: number){
        if(quantCliques % 2 == 0 || quantCliques == 0){
            setFundo2(arrSites[id].fundo)
            setFundo2On(true)
        }else{
            setFundo(arrSites[id].fundo)
            setFundo2On(false)
        }
    }


    function cliqueSetaDireita(){
        if(id < arrSites.length - 1){
            setAnimSair(true)
            setId(id + 1)
            setGirarAntiHor(true)
        }
    }

    function cliqueSetaEsquerda(){
        if(id > 0){
            setAnimSair(true)
            setId(id - 1)
            setGirarHorario(true)
        }
    }

    function finalAnimFn(){
        setImgFixa(arrSites[id].img)
        setIconeFixo(arrSites[id].icone)
        //deixar o animationFillMode: forwards é interessante pq ai a gente tem o controle do fluxo de quando a animação  vai ser desfeita, com isso a gente consegue garantir q a animação só seja desdeita dps q a imagem fixa pegou o valor novo
        setAnimSair(false)
        setGirarHorario(false)
        setGirarAntiHor(false)
    }

    useEffect(() => {
        console.log(!carregouAgora)

        if(!carregouAgora){
            setImgProvisoria(arrSites[id].img)
            setIconeProvisorio(arrSites[id].icone)
        }
        confereFundo(cliques)
        setCarregouAgora(false)
        cliques++

    }, [id])

    return (
        <C.ContainerGeral style={{backgroundImage: `url(${fundo})`}}>
            <C.Fundo2 style={{opacity: fundo2On ? "1" : "0", backgroundImage: `url(${fundo2})`}}></C.Fundo2>
            <C.ContainerImagem onAnimationEnd={finalAnimFn} style={{animationName: girarAntiHor ? "giroAntiHorImagem" : girarHorario ? "giroHorImagem" : "", animationDuration: "var(--tempoAnimacaoIcone)", animationFillMode: "forwards"}} >
                <C.ImagemSite src={imgFixa} />
                <C.ImagemSite src={imgProvisoria} style={{transform: "rotate(180deg)"}}/>
            </C.ContainerImagem>
            <C.Seta src={seta} onClick={cliqueSetaDireita} style={{transform: "translateX(calc(0.5 * var(--diametroCirculo)))", left: "50%"}} />{/* Seta direita */}
            <C.Seta src={seta} onClick={cliqueSetaEsquerda} style={{ rotate: "-180deg", translate: "calc(-0.5 * var(--diametroCirculo))", right: "50%"}} />{/* Seta esquerda */}
            <C.Circulo></C.Circulo>
            <C.iconeAtual src={iconeFixo} style={{left: "5%", top: "7%", transform: `rotate(-20deg)`, width: "var(--larguraIconeGrande)", animationName: `${animSair? "animacaoSairG1" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : "5s"}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={iconeFixo} style={{right: "5%", bottom: "3%", transform: "rotateZ(17deg) rotateY(-180deg)", width: "var(--larguraIconeGrande)", animationName: `${animSair? "animacaoSairG2" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={iconeFixo} style={{left: "5%", bottom: "15%", rotate: "10deg", width: "var(--larguraIconeMedio)", animationName: `${animSair? "animacaoSairM1" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={iconeFixo} style={{right: "5%", top: "5%", transform: "rotateZ(-15deg) rotateY(-180deg)", width: "var(--larguraIconeMedio)", animationName: `${animSair? "animacaoSairM2" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={iconeFixo} style={{right: "27%", top: "20%", transform: "rotateZ(-10deg) rotateY(-180deg)", width: "var(--larguraIconeMedio)", animationName: `${animSair? "animacaoSairM3" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={iconeFixo} style={{left: "15%", top: "50%", rotate: "5deg", width: "var(--larguraIconePequeno)", animationName: `${animSair? "animacaoSairP1" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={iconeFixo} style={{left: "35%", top: "5%", transform: "rotate(-24deg)", width: "var(--larguraIconePequeno)", animationName: `${animSair? "animacaoSairP2" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>

            <C.iconeAtual src={iconeProvisorio} style={{left: "-40px", top: "-40px", transform: `translate(-100%, -100%) rotate(-20deg)`, width: "var(--larguraIconeGrande)", animationName: `${animSair? "animacaoEntrarG1" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={iconeProvisorio} style={{right: "-40px", bottom: "-40px", transform: "translate(100%, 100%) rotateZ(17deg) rotateY(-180deg)", width: "var(--larguraIconeGrande)", animationName: `${animSair? "animacaoEntrarG2" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={iconeProvisorio} style={{left: "-40px", bottom: "10%", transform: "translate(-100%, 100%) rotate(10deg)", width: "var(--larguraIconeMedio)", animationName: `${animSair? "animacaoEntrarM1" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={iconeProvisorio} style={{right: "-40px", top: "5%", transform: "translate(100%, -100%) rotateZ(-15deg) rotateY(-180deg)", width: "var(--larguraIconeMedio)", animationName: `${animSair? "animacaoEntrarM2" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={iconeProvisorio} style={{right: "0%", top: "35%", transform: "translate(100%) rotateZ(-10deg) rotateY(-180deg)", width: "var(--larguraIconeMedio)", animationName: `${animSair? "animacaoEntrarM3" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={iconeProvisorio} style={{left: "-40px", top: "55%", transform: "translate(-100%) rotate(5deg)", width: "var(--larguraIconePequeno)", animationName: `${animSair? "animacaoEntrarP1" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
            <C.iconeAtual src={iconeProvisorio} style={{left: "35%", top: "-40px", transform: "translate(0%, -100%) rotate(-24deg)", width: "var(--larguraIconePequeno)", animationName: `${animSair? "animacaoEntrarP2" : ""}`, animationDuration: `${animSair? "var(--tempoAnimacaoIcone)" : ""}`, animationFillMode: "forwards"}}/>
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