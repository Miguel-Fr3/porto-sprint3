import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CabecalhoD from "../../components/CabecalhoD"
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
export default function Cadastro (){
    return(
        <main className="login">
            <CabecalhoD/>
            <div className="form">
            <form className="formulario">
            <Link to="/login"><FontAwesomeIcon icon={faArrowLeft} className='flecha' /></Link>
                <h1>Cadastrar Conta</h1>
                <label htmlFor="Cpf">Preencha seus dados de acesso para continuar.</label>
                <input type="text" placeholder="CPF ou CNPJ"/>
                <div className="register">
                    <input type="submit" value="Cadastrar"/>
                </div>

            </form>
            </div>
        </main>
    )
}