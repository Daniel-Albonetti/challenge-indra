
import MainLayout from '../components/ui/MainLayout'
import familyImg from '../assets/img/family.png'
import { Form } from '../components/home/Form'

import BackgroundPurple from '../assets/img/blur-asset-left.png';
import BackgroundPurpleMobile from '../assets/img/blur-asset-left2.png';

import BackgroundTurq from '../assets/img/blur-asset.png';
import BackgroundTurqMobile from '../assets/img/blur-asset1.png';

export const Home = () => {

    return (
        <MainLayout isHome>
            
            <img src={BackgroundPurple} alt="background purple" className='home__background--purple' />
            <img src={BackgroundTurq} alt="background turq" className='home__background--turq' />
            <img src={BackgroundPurpleMobile} alt="background purple" className='home__background--purple--mobile' />
            <img src={BackgroundTurqMobile} alt="background turq" className='home__background--turq--mobile' />
            <section id="home" className="home">
                <div>
                    <img src={familyImg} alt="imagen de familia" className='home__image--web' />
                    <div className="home__form">
                        <div className="home__title--mobile">
                            <div className="home_title">
                                <p className="home__title--tag">Seguro Salud Flexible</p>
                                <p className="home__title--title">Creado para ti y tu familia</p>
                            </div>
                            <img src={familyImg} alt="imagen de familia" className='home__image--mobile' />
                        </div>
                        <Form />
                    </div>
                </div>
            </section>

        </MainLayout>
    )

}