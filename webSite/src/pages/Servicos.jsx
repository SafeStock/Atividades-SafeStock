import historico from "../assets/historico.png"
import alerta from "../assets/alerta.png"
import dash from "../assets/dash.png";
import ProdutosLimpeza from "../assets/ProdutosLimpeza.png";
export function Servicos() {



    return (
        <section id="Serviços" className="bg-[#fff] w-full h-[100vh] text-[#5390e7] flex flex-col items-center justify-center gap-[3vh]">
            <h1 className="text-[4.5vh] text-[#2F4672]">Serviços</h1>
            <p className="text-[3vh] text-[#2F4672]">Conheça nossos serviços</p>
            <div className="text-[#2F4672] flex flex-row gap-[3vh]">

                <div className="h-[56vh] rounded-[30px] shadow-[3px_3px_8px_rgba(0,0,0,0.3)] flex flex-col items-center gap-[4vh]
                hover:scale-[1.05] transform duration-500">
                    <img src={ProdutosLimpeza} alt="" className=" h-[25vh] rounded-t-[30px] border-transparent p-4" />
                    <h1 className="text-[2.5vh]">Gerenciamento de Estoque</h1>
                    <span className="w-[32vh] text-center text-[2vh]">Permite o cadastro, edição e remoção de produtos
                        de limpeza de forma simples e organizada.
                        Tenha controle total
                        sobre os itens disponíveis.</span>
                </div>

                <div className="h-[56vh] rounded-[30px] shadow-[3px_3px_8px_rgba(0,0,0,0.3)] flex flex-col items-center gap-[4vh]
                hover:scale-[1.05] transform duration-500">
                    <img src={dash} alt="" className=" h-[25vh] rounded-t-[30px] border-transparent p-4" />
                    <h1 className="text-[2.5vh]">Dashboard Interativa</h1>
                    <span className="w-[32vh] text-center text-[2vh]">Acompanhe relatórios detalhados sobre o consumo de produtos,
                        identifique tendências ao longo do tempo e
                        tome decisões mais assertivas.</span>
                </div>

                <div className="h-[56vh] rounded-[30px] shadow-[3px_3px_8px_rgba(0,0,0,0.3)] flex flex-col items-center gap-[4vh]
                hover:scale-[1.05] transform duration-500">
                    <img src={alerta} alt="" className=" h-[25vh] rounded-t-[30px] border-transparent p-4" />
                    <h1 className="text-[2.5vh]">Alertas Inteligentes</h1>
                    <span className="w-[32vh] text-center text-[2vh]">Configure limites de consumo mensal e receba notificações 
                        automáticas via SMS quando o estoque estiver 
                        próximo do limite estipulado.</span>
                </div>

                <div className="h-[56vh] rounded-[30px] shadow-[3px_3px_8px_rgba(0,0,0,0.3)] flex flex-col items-center gap-[4vh]
                hover:scale-[1.05] transform duration-500">
                    <img src={historico} alt="" className=" h-[25vh] rounded-t-[30px] border-transparent p-4" />
                    <h1 className="text-[2.5vh]">Histórico de Uso</h1>
                    <span className="w-[32vh] text-center text-[2vh]">Registre todas as movimentações do estoque, acompanhe quais 
                        produtos entram e saem, e tenha um controle 
                        mais preciso.</span>
                </div>
            </div>
        </section>
    )


}