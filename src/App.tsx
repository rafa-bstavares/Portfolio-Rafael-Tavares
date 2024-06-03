import { useState } from "react"
import SecaoSite from "./components/SecaoSite/SecaoSite"
import * as Sty from "./AppStyle"
import imgImmobiliare from "./assets/images/immobiliare.png"
import fundoImmobiliare from "./assets/images/fundoImmobiliare.jpg"
import iconeCasa from "./assets/images/CasaPngComprimida.png"

function App() {



  return (
    <>
      <Sty.divGeralSecaoSite>
        <SecaoSite taNaTela={true} />
      </Sty.divGeralSecaoSite>
      
    </>
  )
}

export default App
