import CabecalhoA from "../../components/CabecalhoA"
export default function Ajuda (){
    return(
        <main className="ajuda">
            <CabecalhoA/>
            <div className="help">
            <label htmlFor="ajuda">Preencha seus dados de acesso para continuar.</label>
            <input type="text" id="ajuda" placeholder="Pesquise o que você precisa aqui!" />
            </div>
        </main>
    )
}