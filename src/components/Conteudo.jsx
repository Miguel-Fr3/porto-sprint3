import img3 from '../assets/img3.png'
import img8 from '../assets/img8.png'
export default function Conteudo (){
    return(
        <>
        <section>
        <div className="superior">
        <p>
            <h1>Guincho 24 horas</h1>
            
                Guinchos ilimitados, sem limite de quilometragem. <br />
                Reparos do carro
                Reparo rápido e Supermartelinho de Ouro.</p>
            <img src={img3} alt="" className='imgC'/>
        </div>
        </section>
        <section>
        <div className="inferior">
        <p>
            <h1>Reparos do carro</h1>
            Reparo rápido e Supermartelinho de Ouro.</p>
            <img src={img8} alt="" className='imgC'/>
        </div>
        </section>
        </>
    )
}