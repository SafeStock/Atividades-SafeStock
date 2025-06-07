import { ImgReference } from "../components/ImgReference"

export function PorQueSafeStock() {
    return(
        <section id="Por que SafeStock" className="bg-[#eee] w-full h-[110vh] text-[#5390e7] flex justify-center items-center flex-col ">
         <p className="text-[6.5vh] text-[#3A577B] absolute mb-[55vh]">Por que escolher Safe<strong>Stock</strong>?</p>
         <p className="text-[3.5vh] text-[#3A577B] mr-[63vw] mb-[32.5vh] absolute">Com a SafeStock <b>você tem:</b></p>
         <div className=" w-full h-[40vh] flex justify-center items-center flex-row mt-[20vh]">
        <ImgReference imagemUrl="/src/assets/Controle.svg" texto="Controle fácil e intuitivo dos estoques "/>
        <ImgReference imagemUrl="/src/assets/Grafico.svg" texto="Insights em relação ao consumo"/>
        <ImgReference imagemUrl="/src/assets/Recicle.svg" texto="Ajuda ativa contra o desperdício"/>
        <ImgReference imagemUrl="/src/assets/ODS.svg" texto="Contribuição para o desenvolvimento sustentável"/>
        <ImgReference imagemUrl="/src/assets/ODS2.svg" texto="Saúde e bem estar das crianças em ambiente escolar"/>
         </div>
        </section>
     )
}