import CabecalhoS from "../../components/CabecalhoS"
import img0 from "../../assets/img0.png"
export default function Sobre (){
    return(
        <main className="sobre">
            <CabecalhoS/>
            <div>
                <h1 className="proposito">Nosso propósito é</h1>
                <h1 className="porto">Ser um porto seguro para as pessoas</h1>
            </div>
            <div className="inferior">
            <div className="colab">
                <h1>Colaboradores</h1>
                <h2>rm99977 - Alberto Seiji

                rm551997 - Matheus Rodrigues

                rm99997 - Miguel Fernandes

                rm551521 - Patrick Jaguski

                rm552213 - Ye</h2>
                </div>
                <div className="historia">
                    <img src={img0} alt="Fachada porto " />
                    <h1>Conheça nossa história</h1>
                    <h2>
                    Em 1945, a Porto é fundada, em São Paulo/SP, contando com cerca de 50 funcionários.
                    </h2>

                <div>
                    <button>Conheça mais</button>
                </div>
                </div>
                </div>
        </main>
    )
}