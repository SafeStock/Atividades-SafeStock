import dash from "../assets/dash.png";
import ProdutosLimpeza from "../assets/ProdutosLimpeza.png";
export function Servicos() {



    return (
        <section id="Serviços" className="bg-[#fff] w-full h-[100vh] text-[#5390e7] flex flex-col items-center justify-center">
            <h1 className="text-[4.5vh]">Serviços</h1>
            <div className="text-[#2F4672] flex flex-row gap-[3vh]">
                <div className="h-[56vh] rounded-[30px] shadow-[3px_3px_8px_rgba(0,0,0,0.3)] flex flex-col items-center gap-[4vh]">
                    <img src={ProdutosLimpeza} alt="" className=" h-[25vh] rounded-t-[30px] border-transparent p-4" />
                    <h1>Gerenciamento de Estoque</h1>
                    <span className="w-[32vh] text-center text-[2vh]">Permite o cadastro, edição e remoção de produtos
                        de limpeza de forma simples e organizada.
                        Tenha controle total
                        sobre os itens disponíveis.</span>
                </div>
                <div className="h-[56vh] rounded-[30px] shadow-[3px_3px_8px_rgba(0,0,0,0.3)] flex flex-col items-center gap-[4vh]">
                    <img src={dash} alt="" className=" h-[25vh] rounded-t-[30px] border-transparent p-4" />
                    <h1>Gerenciamento de Estoque</h1>
                    <span className="w-[32vh] text-center text-[2vh]">Permite o cadastro, edição e remoção de produtos
                        de limpeza de forma simples e organizada.
                        Tenha controle total
                        sobre os itens disponíveis.</span>
                </div>
                <div className="h-[56vh] rounded-[30px] shadow-[3px_3px_8px_rgba(0,0,0,0.3)] flex flex-col items-center gap-[4vh]">
                    <img src={dash} alt="" className=" h-[25vh] rounded-t-[30px] border-transparent p-4" />
                    <h1>Gerenciamento de Estoque</h1>
                    <span className="w-[32vh] text-center text-[2vh]">Permite o cadastro, edição e remoção de produtos
                        de limpeza de forma simples e organizada.
                        Tenha controle total
                        sobre os itens disponíveis.</span>
                </div>
                <div className="h-[56vh] rounded-[30px] shadow-[3px_3px_8px_rgba(0,0,0,0.3)] flex flex-col items-center gap-[4vh]">
                    <img src={dash} alt="" className=" h-[25vh] rounded-t-[30px] border-transparent p-4" />
                    <h1>Gerenciamento de Estoque</h1>
                    <span className="w-[32vh] text-center text-[2vh]">Permite o cadastro, edição e remoção de produtos
                        de limpeza de forma simples e organizada.
                        Tenha controle total
                        sobre os itens disponíveis.</span>
                </div>
            </div>
        </section>
    )


}