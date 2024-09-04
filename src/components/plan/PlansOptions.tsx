
import { useState } from 'react';

import IconForMy from '../../assets/img/IconForMy.png';
import IconForSomeone from '../../assets/img/IconForSomeone.png';
import { ButtonCard } from './ButtonCard';

interface PlansOptionsProps {
    setSelectedUserPlan: (value: string) => void;
}

export const PlansOptions = ({ setSelectedUserPlan }: PlansOptionsProps) => {

    const [selectedPlan, setSelectedPlan] = useState('');

    const onSelectPlan = (e: any) => {
        setSelectedPlan(e.target.value);
        setSelectedUserPlan(e.target.value);
    };

    return (
        <div className="plans__options">
            <label htmlFor="ForMe">
                <input
                    id="ForMe"
                    type="radio" 
                    name="plans"
                    value="Para mí"
                    onChange={onSelectPlan}
                />
                <ButtonCard
                    isSelect={selectedPlan === 'Para mí'}
                    icon={IconForMy}
                    title="Para mí"
                    description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
                />
            </label>

            <label htmlFor="ForOther">
                <input
                    type="radio"
                    id="ForOther"
                    name="plans"
                    value="Para alguien más"
                    onChange={onSelectPlan}
                />
                <ButtonCard 
                    isSelect={selectedPlan === 'Para alguien más'}
                    icon={IconForSomeone}
                    title="Para alguien más"
                    description="Realiza una cotización para uno de tus familiares o cualquier persona."
                />
            </label>
        </div>
    );

}
