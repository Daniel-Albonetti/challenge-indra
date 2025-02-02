
import IconLine from '../../assets/img/line.png';
import { BackButton } from '../ui/BackButton';

interface Props {
    step: number;
}

export const Steps = ({ step }: Props) => {

    return (
        <div className="steps">
            <div>
            <div className="steps__bar">
                <BackButton className="steps__bar__button" />
                <div className="steps__bar__steps">
                    <div>
                        <div className={`steps__bar__circle ${step === 1 ? 'steps__bar__circle--active' : ''}`}>1</div>
                        <p className={`steps__bar__text ${step === 1 ? 'steps__bar__text--active' : ''}`}>Planes y Coberturas</p>
                    </div>
                    <img src={IconLine} alt="lines" className='steps__bar__line' />
                    <div>
                        <div className={`steps__bar__circle ${step === 2 ? 'steps__bar__circle--active' : ''}`}>2</div>
                        <p className={`steps__bar__text ${step === 2 ? 'steps__bar__text--active' : ''}`}>Resumen</p>
                    </div>
                </div>
                <div className="steps__bar__steps--mobile">
                    <p>PASO {step} DE 2</p>
                    <div className="line" >
                        <div style={step===1? {"width":"50%"}:{"width":"100%"}}></div>
                    </div>
                </div>

            </div>

            <BackButton className="steps__button" classNameButton="button__back__button--color" hasText/>
            </div>
        </div>
    );

}
