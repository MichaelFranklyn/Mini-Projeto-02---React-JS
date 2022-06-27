import './header.css'
import logo from '../../assets/logo.svg'
import profile from '../../assets/profileMichael.jpg'


export default function Header() {
    return (
        <header>
            <img className='logo' src={logo} alt='logo' />

            <div className='container_perfil'>
                <img className='profile' src={profile} alt='profile' />
                <strong>Bem-Vindo, Michael.</strong>
            </div>
        </header>
    )
}