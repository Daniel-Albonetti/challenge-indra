
import { ReactComponent as RimacSVG } from '../../assets/icons/rimac.svg';
import Logo from '../../assets/img/rimac.png';

export const Footer = () => {

    return (
        <footer className="footer">
            <div>
                <div className='footer__logo'>
                    <RimacSVG className='footer__logo--web' />
                    <img src={Logo} alt="logo de rimac" className='footer__logo--mobile' />
                </div>
                <hr className='footer__line' />
                <div className='footer__information'>
                    <span className='footer__information--copyright'>© 2023 RIMAC Seguros y Reaseguros.</span>
                </div>
            </div>
        </footer>
    );
    
}