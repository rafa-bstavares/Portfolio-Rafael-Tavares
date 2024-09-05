import SecaoSite from "./components/SecaoSite/SecaoSite"
import SecaoBlur from "./components/SecaoBlur/SecaoBlur"
import SecaoCartas from "./components/SecaoCartas/SecaoCartas"
import SecaoBanner2 from "./components/SecaoBanner2/SecaoBanner2"
import * as Sty from "./AppStyle"




function App() {


  return (
    <>
      {/*
      <Sty.divGeralSecaoBanner>
        <SecaoBanner/>
      </Sty.divGeralSecaoBanner>
      */}
      <div>
        <SecaoBanner2/>
      </div>
      <Sty.divGeralSecaoSite>
        <Sty.ElemGrad1></Sty.ElemGrad1>
        <Sty.ElemGrad2></Sty.ElemGrad2>

{       
/* <div className="text-center w-full flex justify-center text-6xl text-white absolute top-5 z-[100000000000000000]">
              Meus Projetos
        </div>
        */}
        <SecaoSite taNaTela={true} />
      </Sty.divGeralSecaoSite>
      <Sty.divGeralSecaoBlur>
        <SecaoBlur/>
      </Sty.divGeralSecaoBlur>
      <Sty.divGeralSecaoCartas>
        <SecaoCartas/>
      </Sty.divGeralSecaoCartas>
      <div>
      </div>
    </>
  )
}

export default App
