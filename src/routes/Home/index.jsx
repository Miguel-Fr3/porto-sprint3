import img3 from '../../assets/img3.png'
import img8 from '../../assets/img8.png'
import Rodape from '../../components/Rodape'
import Cabecalho from '../../components/Cabecalho'
export default function Home (){
    return(
        <main>
        <Cabecalho/>
        <section>
        <div className="superior">
            <div>
        <h1>Guincho 24 horas</h1>
        <p>
            Guinchos ilimitados, sem limite de quilometragem. <br />
            Reparos do carro
            Reparo rápido e Supermartelinho de Ouro.
        </p>

        </div>
        <img src={img3} alt="Desenho de Guincho" className='imgC'/>
        </div>
        </section>
        <section>
        <div className="inferior">
        <div>
        <h1>Reparos do carro</h1>
        <p>
            Reparo rápido e Supermartelinho de Ouro.
        </p>
        </div>
            <img src={img8} alt="Homens consertando carro" className='imgC'/>
        </div>
        </section>
        <Rodape/>
        </main>

    )
}