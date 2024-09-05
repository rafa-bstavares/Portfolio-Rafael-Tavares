import * as C from "./style"
import logoReact from "../../assets/images/iconeReact.svg"
import logoReactPB from "../../assets/images/iconeReactPB.svg"
import logoNode from "../../assets/images/iconeNode.svg"
import logoNodePB from "../../assets/images/iconeNodePB.svg"
import logoSql from "../../assets/images/iconeSql (1).png"
import logoGit from "../../assets/images/iconeGit.svg"
import logoGitPB from "../../assets/images/iconeGitPB.svg"
import logoSocket from "../../assets/images/iconeSocket.svg"
import logoSocketPB from "../../assets/images/iconeSocketPB.svg"
import logoTs from "../../assets/images/iconeTS.svg"
import logoTsPB from "../../assets/images/iconeTSPB.svg"
import { useEffect, useRef } from "react"

export default function SecaoCartas(){
    const containerGeral = useRef<HTMLDivElement>(null)

    function aplicarFiltro(e: PointerEvent){
        const documentTarget = e.currentTarget as Element


        if(!containerGeral.current){
            return 
        }

        let xContainerCartas 
        let yContainerCartas 

        if(e.pageX && e.pageY){
            xContainerCartas = e.pageX - containerGeral.current.offsetLeft
            yContainerCartas = e.pageY - containerGeral.current.offsetTop
            console.log(xContainerCartas, yContainerCartas)
            documentTarget.setAttribute("style", `--x: ${xContainerCartas}px; --y: ${yContainerCartas}px; --opacity: 1`)
        }else{
            return 
        }

    }

    useEffect(() => {
        document.body.addEventListener("pointermove", (e) => {
            aplicarFiltro(e)
        })

    }, [])

    return (
        <C.ContainerSecaoCartas ref={containerGeral}>
            <C.ContainerCartasTotais>
                <C.ContainerCartas>

                    <C.Carta>
                        <C.imgCarta src={logoTsPB} />
                        <C.nome>
                            TypeScript
                        </C.nome>
                    </C.Carta>                    

                    <C.Carta>
                        <C.imgCarta src={logoNodePB} />
                        <C.nome>
                            NodeJs
                        </C.nome>
                    </C.Carta>

                    <C.Carta>
                        <C.imgCarta src={logoReactPB} />
                        <C.nome>
                            React 
                        </C.nome>
                    </C.Carta>

                    <C.Carta>
                        <C.imgCarta src={logoSql} />
                        <C.nome>
                            Bancos de Dados 
                        </C.nome>
                    </C.Carta>

                    <C.Carta>
                        <C.imgCarta src={logoGitPB} />
                        <C.nome>
                            Git
                        </C.nome>
                    </C.Carta>

                    <C.Carta>
                        <C.imgCarta src={logoSocketPB} />
                        <C.nome>
                            Socket.io
                        </C.nome>
                    </C.Carta>

                </C.ContainerCartas>

                <C.ContainerCartasSobre style={{
                    opacity: "var(--opacity, 0)",
                    mask: `
                    radial-gradient(
                        25rem 25rem at var(--x) var(--y),
                        #000 1%,
                        transparent 50%
                    )`,
                    WebkitMask: `
                    radial-gradient(
                        25rem 25rem at var(--x) var(--y),
                        #000 1%,
                        transparent 50%
                    )`,
                }}>
                    
                    <C.CartaSobre style={{backgroundColor: "#c0c0c0", border: "2px solid #c0c0c0"}}>
                        <C.imgCarta src={logoTs} />
                        <C.nomeSobre style={{border: "2px solid #c0c0c0", backgroundColor: "#007acc"}}>
                            TypeScript
                        </C.nomeSobre>
                    </C.CartaSobre>                    

                    <C.CartaSobre style={{backgroundColor: "#c0c0c0", border: "2px solid #c0c0c0"}}>
                        <C.imgCarta src={logoNode} />
                        <C.nomeSobre style={{border: "2px solid #c0c0c0", backgroundColor: "#8cc84b"}}>
                            NodeJs
                        </C.nomeSobre>
                    </C.CartaSobre>

                    <C.CartaSobre style={{backgroundColor: "#c0c0c0", border: "2px solid #c0c0c0"}}>
                        <C.imgCarta src={logoReact} />
                        <C.nomeSobre style={{border: "2px solid #c0c0c0", backgroundColor: "#00d8ff"}}>
                            React
                        </C.nomeSobre>
                    </C.CartaSobre>

                    <C.CartaSobre style={{backgroundColor: "#c0c0c0", border: "2px solid #c0c0c0"}}>
                        <C.imgCarta src={logoSql} />
                        <C.nomeSobre style={{border: "2px solid #c0c0c0", backgroundColor: "#c0c0c0"}}>
                            Bancos de Dados
                        </C.nomeSobre>
                    </C.CartaSobre>

                    <C.CartaSobre style={{backgroundColor: "#c0c0c0", border: "2px solid #c0c0c0"}}>
                        <C.imgCarta src={logoGit} />
                        <C.nomeSobre style={{border: "2px solid #c0c0c0", backgroundColor: "#f03c2e"}}>
                            Git
                        </C.nomeSobre>
                    </C.CartaSobre>

                    <C.CartaSobre style={{backgroundColor: "#e6e6e6", border: "2px solid #c0c0c0"}}>
                        <C.imgCarta src={logoSocket} />
                        <C.nomeSobre style={{border: "2px solid #c0c0c0", backgroundColor: "#fff"}}>
                            Socket.io
                        </C.nomeSobre>
                    </C.CartaSobre>

                </C.ContainerCartasSobre>
            </C.ContainerCartasTotais>
        </C.ContainerSecaoCartas>
    )
}