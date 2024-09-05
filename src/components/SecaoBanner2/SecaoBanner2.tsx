import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { AuroraBackground } from "../ui/aurora-background"
import ItemDescBanner from "../ItemDescBanner/ItemDescBanner"
import setaBotao from "../../assets/images/setaBotao.svg"
import selo from "../../assets/images/seloPortfolio.png"
import animationData from "../../assets/images/animacaoContruir3.json"
import ondas from "../../assets/images/ondasPortfolio.png"
import Lottie from 'react-lottie'
import { useState } from "react"
import logoPura from "../../assets/images/logoPura.svg"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


type objAnimationType = {
    isStopped: boolean,
    isPaused: boolean
  }

export default function SecaoBanner2(){
    

    const [animationState, setAnimationState] = useState<objAnimationType>({isStopped: false, isPaused: false})

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    useGSAP(() => {
        gsap.to(".containerPinado", {
            scrollTrigger: {
                trigger: ".containerAlto",
                start: "top top",
                end: "bottom bottom",
                pin: ".containerPinado"
            }
        })

        gsap.to(".reduzido", {
            scrollTrigger: {
                trigger: ".containerAlto",
                start: "top top",
                end: "bottom bottom",
                scrub: 3
            },
            clipPath: "circle(0% at 50% 50%)"
        })

        gsap.to(".zoomOut", {
            scrollTrigger: {
                trigger: ".containerAlto",
                start: "top top",
                end: "bottom bottom",
                scrub: 3
            },
            scale: 1
        })

    })

    const itensDesc = [
        {texto: "Criar"},
        {texto: "Inovar"},
        {texto: "Explorar"},
        {texto: "Ousar"},
        {texto: "Criar"},
        {texto: "Inovar"},
        {texto: "Explorar"},
        {texto: "Ousar"},
    ]


    return (
        <div className="containerAlto h-[200vh] flex flex-col font-dmSans">
            <div className="containerPinado h-[100vh] w-full relative">
                <div className="h-screen w-full">
                    <AuroraBackground>
                        <div className="zoomOut w-[100vw] h-full flex flex-col justify-evenly scale-[3]">
                            <div className="flex gap-16">
                                {
                                    itensDesc.map(item => <ItemDescBanner texto={item.texto} key={item.texto}/>)
                                }
                            </div>
                            <div className="flex gap-16 -translate-x-[10%]">
                                {
                                    itensDesc.map(item => <ItemDescBanner texto={item.texto} key={item.texto}/>)
                                }
                            </div>
                            <div className="flex gap-16">
                                {
                                    itensDesc.reverse().map(item => <ItemDescBanner texto={item.texto} key={item.texto}/>)
                                }
                            </div>
                        </div>
                    </AuroraBackground>
                </div>
                <div className="reduzido flex [clip-path:circle(100%_at_50%_50%)] absolute top-0 left-0 w-[100vw] h-screen bg-center">
                    <div className="flex gap-4 h-full w-full bg-roxoEscuro px-[200px] py-[80px] relative">
                        <div className="absolute top-4 left-8 w-[80px] h-auto">
                            <img className="w-full h-auto opacity-50" src={logoPura} alt="logo" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0">
                            <img className="w-full h-auto opacity-40" src={ondas} alt="ondas de fundo" />
                        </div>
                        <div className="w-[110vw] aspect-square [background:radial-gradient(circle_closest-side_at_50%,#8c52ff,transparent);] absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[80%]"></div>
                        <div className="w-3/5 flex flex-col items-center gap-4 justify-center">
                                <div className="text-center text-6xl w-4/5 font-bold text-white relative">
                                    <div className="absolute -top-[160px] -left-[100px]  h-[200px] w-[200px] animate-rodar">
                                        <img src={selo} alt="selo qualidade" />
                                    </div>
                                    Vamos construir um <span className="text-roxoClaro">site</span> que será sua maior <span className="text-roxoClaro">vitrine</span>
                                </div>
                                <div className="text-white text-center text-xl w-4/5">
                                    <span className="opacity-70">Contruímos seu site com as técnicas mais avançadas no mercado te</span> diferenciando e destacando da concorrência
                                    <span className="opacity-70">. Nada de templates prontos, tudo personalizado para o seu negócio!</span>
                                </div>
                                <div className="group flex mt-8 cursor-pointer w-full justify-center ">
                                    <div className="h-16 px-4 flex items-center bg-white rounded-xl">
                                        <div className="scale-[0.85] w-full h-full flex justify-center items-center group-hover:scale-100 font-bold text-xl text-roxoEscuro transition-all duration-500 ease-in-out">
                                            quero orçamento
                                        </div>
                                    </div>
                                    <div className="bg-white h-16 w-20 group-hover:w-7 relative transition-all duration-500 ease-in-out">
                                        <div className="absolute h-[45%] left-0 right-0 top-0 rounded-b-xl bg-roxoEscuro"></div>
                                        <div className="absolute h-[45%] left-0 right-0 bottom-0 rounded-t-xl bg-roxoEscuro"></div>
                                    </div>
                                    <div className="w-16 h-16 bg-white rounded-xl flex justify-center items-center">
                                        <img className="group-hover:scale-100 scale-75 transition-all duration-500 ease-in-out h-[70%] w-auto" src={setaBotao} alt="Seta botão pedir orçamento" />
                                    </div>
                                </div>
                        </div>
                        <div className="w-2/5 flex justify-center items-center">
                            <Lottie options={defaultOptions}
                                height={400}
                                width={400}
                                isStopped={animationState.isStopped}
                                isPaused={animationState.isPaused}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}