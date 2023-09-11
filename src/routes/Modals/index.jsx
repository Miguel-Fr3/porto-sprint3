import CabecalhoM from "../../components/CabecalhoM"
import img5 from "../../assets/img5.png"
import img4 from "../../assets/img4.png"
import img6 from "../../assets/img6.png"
import img10 from "../../assets/img10.png"
import img1 from "../../assets/img1.png"
import img9 from "../../assets/img9.png"
import img2 from "../../assets/img2.png"
export default function Modals (){
    return(
        <main className="modal">
            <CabecalhoM/>
            <section className="conteudo">
                <div className="modals">
                    <img src={img5} alt="" />
                    <h1>Guincho Leve</h1>
                    <p>
                        Utilizado para veículos de pequeno porte, como carros de passeio e motocicletas, em casos de pane mecânica, elétrica, pneu furado, entre outros.
                    </p>
                </div>
                <div className="modals">
                    <img src="" alt="" />
                    <h1>Guincho Pesado</h1>
                    <p>
                    Destinado a veículos de maior porte, como caminhões e ônibus, utilizado em casos de panes mecânicas, acidentes ou remoção do veículo.
                    </p>
                </div>
                <div className="modals">
                    <img src="" alt="" />
                    <h1>Guincho Plataforma</h1>
                    <p>
                    Possui uma plataforma elevatória para transportar veículos com rodas travadas, danificados em acidentes ou quando não é possível rebocar o veículo normalmente.
                    </p>
                </div>
                <div className="modals">
                    <img src="" alt="" />
                    <h1>Guincho para Veículos Especiais</h1>
                    <p>
                    Projetado para transportar veículos especiais, como trailers, motorhomes e embarcações, levando em consideração suas características e dimensões únicas.
                    </p>
                </div>
                <div className="modals">
                    <img src="" alt="" />
                    <h1>Guincho 24 Horas</h1>
                    <p>
                    Serviço disponível 24 horas por dia, todos os dias da semana, garantindo assistência em casos de emergência a qualquer momento.
                    </p>
                </div>
                <div className="modals">
                    <img src="" alt="" />
                    <h1>Guincho para Veículos 4x4</h1>
                    <p>
                    Especializado em reboques de veículos com tração nas quatro rodas, adequado para situações off-road e terrenos difíceis.

                    </p>
                </div>
                <div className="modals">
                    <img src="" alt="" />
                    <h1>Reboque para Concessionária</h1>
                    <p>
                    Serviço direcionado para levar o veículo diretamente a uma concessionária para reparo ou manutenção.

                    </p>
                </div>
            </section>
        </main>
    )
}