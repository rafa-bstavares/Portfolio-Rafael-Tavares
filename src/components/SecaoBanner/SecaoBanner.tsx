
import { AuroraBackground } from "../ui/aurora-background"
import ItemDescBanner from "../ItemDescBanner/ItemDescBanner"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

export default function SecaoBanner(){


    useGSAP(() => {
        setTimeout(() => {
            /*let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".secaoGeralBanner",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 3,
                    pin: true,
                    markers: true
                }
            })
    
            tl.to(".imgInicial", {
                clipPath: "circle(0% at 50% 50%)",
            })*/

        
                gsap.to(".imgInicial", {
                    scrollTrigger: {
                        trigger: ".secaoGeralBanner",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 3,
                        pin: true,
    
                        toggleActions: "restart complete reverse pause"
                    },
                    clipPath: "circle(0% at 50% 50%)",
                })

    
            //tl.to(".descBannerDiv", {
              //  scale: 1
            //})
    
            gsap.to(".descBannerDiv", {
                scrollTrigger: {
                    trigger: ".secaoGeralBanner",
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    scrub: 3,
                    markers: true
                },
                scale: 1
            })
    
            //gsap.to(".descBannerDiv", {
              //  scrollTrigger: {
                //    trigger: ".secaoGeralBanner",
                  //  start: "top top",
                    //end: "bottom top",
                    //pin: true
                //}
            //})
        }, 100)
     
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


    return(
        <div className="secaoGeralBanner flex flex-col w-full h-[200vh] relative overflow-hidden">
            <div className="imgInicial [clip-path:circle(100%_at_50%_50%)] z-20 w-full h-screen overflow-hidden bg-green-950 relative">

            </div>
            <div className="descBannerDiv h-screen scale-[2] w-full absolute top-0 left-0">
                <AuroraBackground>
                    <div className="flex flex-col justify-center gap-20 h-full px-12 py-4 w-full">
                        <div className="flex gap-14">
                            {
                                itensDesc.map(item => (
                                    <ItemDescBanner texto={item.texto} key={item.texto} />
                                ))
                            }
                        </div>
                        <div className="flex gap-14 -translate-x-[10%]">
                            {
                                itensDesc.map(item => (
                                    <ItemDescBanner texto={item.texto} key={item.texto} />
                                ))
                            }
                        </div>
                        <div className="flex gap-14">
                            {
                                itensDesc.map(item => (
                                    <ItemDescBanner texto={item.texto} key={item.texto} />
                                ))
                            }
                        </div>
                    </div>
                </AuroraBackground>
            </div>
        </div>
    )
}