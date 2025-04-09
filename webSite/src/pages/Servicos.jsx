import ProdutosLimpeza from "../assets/ProdutosLimpeza.png";
export function Servicos() {



    return (
        <section id="Serviços" className="bg-[#fff] w-full h-[100vh] text-[#5390e7] flex flex-col items-center justify-center">
           
            <h1 className="font-bold text-[5vh]">Serviços</h1>
            <p className="text-[3vh]">Conheça nossos serviços</p>
            <div className="w-[17%]">
                <div>
                    <div>
                        <img src={ProdutosLimpeza} alt="" className="w-[70%] "/>
                    </div>
                    <h2>Gerenciamento de Estoque</h2>
                </div>
            </div>
        </section>
    )


}