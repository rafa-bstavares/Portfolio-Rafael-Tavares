import { useState } from "react"
import SecaoSite from "./components/SecaoSite/SecaoSite"
import * as Sty from "./AppStyle"
import imgImmobiliare from "./assets/images/immobiliare.png"
import fundoImmobiliare from "./assets/images/fundoImmobiliare.jpg"
import iconeCasa from "./assets/images/CasaPngComprimida.png"

function App() {

  const [idTelaAtual, setIdTelaAtual] = useState<number>(0)

  return (
    <>
      <Sty.divGeralSecaoSite>
        <SecaoSite id={idTelaAtual} taNaTela={true} img={imgImmobiliare} fundo={fundoImmobiliare} icone={iconeCasa} />
        {/*<SecaoSite id={idTelaAtual} taNaTela={false}/>*/}
      </Sty.divGeralSecaoSite>
      
    </>
  )
}

export default App
