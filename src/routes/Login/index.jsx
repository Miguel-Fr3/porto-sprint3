import CabecalhoD from "../../components/CabecalhoD"
export default function Login (){
    return(
        <main className="login">
            <CabecalhoD/>
            <form className="formulario">
                <label htmlFor="Cpf"></label>
                <input type="text" placeholder="CPF ou CNPJ"/>
                <div className="register">
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
        </main>
    )
}