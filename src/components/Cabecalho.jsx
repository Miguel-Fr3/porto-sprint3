import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Cabecalho() {
    return(
        <>
        <header>
            <div>
                <img src={logo} alt="Logo da porto" />
            </div>
            <nav>
            <h1>Ajuda</h1>
            <h1>Modals</h1>
            <h1>Sobre nós</h1>
            </nav>
            <div className='icon'>
                <FontAwesomeIcon icon={faSearch} className='lupa' />
                <FontAwesomeIcon icon={faUserCircle} className='usuario'/>
            </div>
            </header>
        </>
    )
}