import * as C from "./style.ts"
import imgSeta from "../../assets/images/setarRedes.svg"



export default function SecaoBlur(){
    return (
        <C.ContainerBlur>
            <C.divItemBlur style={{marginLeft: "0px", cursor: "default"}}>
                Outras Redes           
            </C.divItemBlur>
            <C.divItemBlur target="_blank" href="https://github.com/rafa-bstavares?tab=repositories" style={{marginLeft: "230px"}}>
                Github    
                <C.imgSeta src={imgSeta}/>            
            </C.divItemBlur>
            <C.divItemBlur target="_blank" href="https://www.linkedin.com/in/rafael-tavares-274a88246/" style={{marginLeft: "30px"}}>
                Linkedin    
                <C.imgSeta src={imgSeta}/>      
            </C.divItemBlur>   
            <C.divItemBlur target="_blank" href="https://www.youtube.com/@rafas.t/videos" style={{marginLeft: "490px"}}>
                Youtube    
                <C.imgSeta src={imgSeta}/>           
            </C.divItemBlur>   
        </C.ContainerBlur>
    )   
} 