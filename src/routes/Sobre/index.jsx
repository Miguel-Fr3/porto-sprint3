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
                </div>
        </main>
    )
}