import img3 from '../assets/img3.png'
export default function Conteudo (){
    return(
        <>
        <section>
        <div className="superior">
            <p>Guincho 24 horas
                Guinchos ilimitados, sem limite de quilometragem.
                Reparos do carro
                Reparo rápido e Supermartelinho de Ouro.</p>
            <img src={img3} alt="" className='imgC'/>
        </div>
        </section>
        <section>
        <div className="inferior">

        </div>
        </section>
        </>
    )
}