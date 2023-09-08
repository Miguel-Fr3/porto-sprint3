import img3 from '../../assets/img3.png'
import img8 from '../../assets/img8.png'
import Rodape from '../../components/Rodape'
export default function Home (){
    return(
        <main>
        <section>
        <div className="superior">
        <p>
            <h1>Guincho 24 horas</h1>
            
                Guinchos ilimitados, sem limite de quilometragem. <br />
                Reparos do carro
                Reparo rápido e Supermartelinho de Ouro.</p>
            <img src={img3} alt="Desenho de Guincho" className='imgC'/>
        </div>
        </section>
        <section>
        <div className="inferior">
        <p>
            <h1>Reparos do carro</h1>
            Reparo rápido e Supermartelinho de Ouro.</p>
            <img src={img8} alt="Homens consertando carro" className='imgC'/>
        </div>
        </section>
        <Rodape/>
        </main>
    )
}