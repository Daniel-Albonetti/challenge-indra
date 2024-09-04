
import { ReactComponent as LogoSVG } from '../../assets/icons/rimac.svg';
import phoneImg from '../../assets/img/img-phone.png';

export const Header = () => {

    return (
        <header className='header'>
            <div>
                <div className='header__logo'>
                    <LogoSVG className='header__icon' />
                </div>
                <div className='header__info'>
                    <span className='header__info--text'>¡Compra por este medio!</span>
                </div>
                <div className='header__phone'>
                    <img src={phoneImg} alt="img phone" />
                    <span>(01) 411 6001</span>
                </div>
            </div>
        </header>
    )

}
