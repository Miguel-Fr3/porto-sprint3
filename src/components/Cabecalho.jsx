import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
export default function Cabecalho() {
    return(
        <>
        <header>
            <div>
                <img src={logo} alt="Logo da porto" className='logo'/>
            </div>
            <nav>
                <Link to='/ajuda' />Ajuda<Link/>
                <span>|</span>
                <Link to='/modals' />Modals<Link/>
                <span>|</span>
                <Link to='/sobre' />Sobre nós<Link/>
                <span>|</span>
            </nav>
            <div className='icon'>
                <FontAwesomeIcon icon={faSearch} className='lupa' />
                <FontAwesomeIcon icon={faUserCircle} className='usuario'/>
            </div>
            </header>
        </>
    )
}