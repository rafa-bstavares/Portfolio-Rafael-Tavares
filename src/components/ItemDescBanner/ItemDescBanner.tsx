import logoItem from "../../assets/images/logoFinal.png"

type Props = {
    texto: string
}

export default function ItemDescBanner({texto}: Props){
    return(
        <div className="flex gap-16 items-center">

            <div className="h-[40px] w-[40px] relative">
                <img src={logoItem} alt="imagem abstrata item banner" className="clip-svg h-full w-auto object-cover "  />
            </div>
            <div className="text-[100px] text-white font-dmSans">
                {texto}
            </div>
        </div>
    )
}