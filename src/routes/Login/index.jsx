import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CabecalhoD from "../../components/CabecalhoD"
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
export default function Login (){
    return(
        <main className="login">
            <CabecalhoD/>
            <div className="form">
            <form className="formulario">
            <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className='flecha' /></Link>
                <h1>Acessar Conta</h1>
                <label htmlFor="Cpf">Preencha seus dados de acesso para continuar.</label>
                <input type="text" placeholder="CPF ou CNPJ"/>
                <div className="register">
                    <input type="submit" value="Enviar"/>
                </div>
                <div className="check">
                <input type="checkbox" />
                <label htmlFor="Check">Lembre de mim</label>
                </div>
                <Link to="/cadastro">Sou novo aqui</Link>
            </form>
            </div>
        </main>
    )
}