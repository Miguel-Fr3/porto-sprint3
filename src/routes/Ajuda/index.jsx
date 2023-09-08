import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CabecalhoA from "../../components/CabecalhoA"
import { faCog, faContactBook, faExclamationTriangle, faMobile, faMoneyBill1Wave, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
export default function Ajuda (){
    return(
        <main className="ajuda">
            <CabecalhoA/>
            <div className="help">
            <label htmlFor="ajuda">Preencha seus dados de acesso para continuar.</label>
            <input type="text" id="ajuda" placeholder="Pesquise o que você precisa aqui!" />
            </div>
            <div className="superior">
                <div><FontAwesomeIcon icon={faExclamationTriangle} className='icona'/><h1>Solicitar Socorro</h1></div>
                <div><FontAwesomeIcon icon={faContactBook} className='icona'/><h1>Contatos</h1></div>
                <div><FontAwesomeIcon icon={faCog} className='icona'/><h1>Editar dados</h1></div>
            </div>
            <div className="inferior">
                <div><FontAwesomeIcon icon={faMobile} className='icona'/><h1>App porto</h1></div>
                <div><FontAwesomeIcon icon={faMoneyBill1Wave} className='icona'/><h1>Pagamentos</h1></div>
                <div><FontAwesomeIcon icon={faThumbsUp} className='icona'/><h1>Benefícios</h1></div>
            </div>
        </main>
    )
}