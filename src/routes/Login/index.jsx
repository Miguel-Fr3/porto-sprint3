import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CabecalhoD from "../../components/CabecalhoD"
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
export default function Login (){
    return(
        <main className="login">
            <CabecalhoD/>
            <div className="form">
            <form className="formulario">
            <FontAwesomeIcon icon={faArrowLeft} className='Flecha' />
                <h1>Acessar Conta</h1>
                <label htmlFor="Cpf">Preencha seus dados de acesso para continuar.</label>
                <input type="text" placeholder="CPF ou CNPJ"/>
                <div className="register">
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
            </div>
        </main>
    )
}