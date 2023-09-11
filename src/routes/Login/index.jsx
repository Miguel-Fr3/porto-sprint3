import "./formulario.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CabecalhoD from "../../components/CabecalhoD";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="login">
      <CabecalhoD />
      <div className="form">
        <form className="formulario">
          <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className='flecha' /></Link>
          <h1>Acessar Conta</h1>
          <label htmlFor="Cpf">Preencha seus dados de acesso para continuar.</label>
          <input type="text" id="Cpf" placeholder="CPF ou CNPJ" />
          <div className="register">
            <input type="submit" id="logar" value="Entrar" />
          </div>
          <div className="check">
            <input type="checkbox" id="check" /> 
            <label htmlFor="check">Lembre de mim</label> 
          </div>
          <Link to="/cadastro">Sou novo aqui</Link>
        </form>
      </div>
    </main>
  );
}