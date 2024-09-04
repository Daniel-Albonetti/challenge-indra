
import { useContext, useEffect, useState } from 'react';

import { AuthStateType } from '../../context/auth/AuthContext';
import parse from 'html-react-parser';

import Button from '../ui/Button';

import { fetchApi } from '../../helpers/fetchApi';
import { getYears } from '../../helpers/getYears';

import ImageHome from '../../assets/img/IHomePlans.png';
import ImageHospital from '../../assets/img/IHospitalPlans.png';
import Constants from '../../helpers/constants';
import { useNavigate } from 'react-router-dom';
import PlanContext from '../../context/plan/PlanContext';

interface PlansListProps {
    user: AuthStateType;
    selectedUserPlan: string;
}

interface GetPlans {
    name: string;
    price: number;
    description: string[];
    age: number;
}

export const PlansList = ({ user, selectedUserPlan }: PlansListProps) => {

    const { KEYWORDS } = Constants;

    const navigate = useNavigate();

    const { savePlan } = useContext(PlanContext)
    const [ plans, setPlans ] = useState<GetPlans[]>([]);

    useEffect(() => {
        
        const getPlans = async () => {

            if (user.name) {

                const resp: any = await fetchApi('https://rimac-front-end-challenge.netlify.app/api/plans.json');
                const result = await resp.json();
                const planForAge = result.list.filter((plan:GetPlans) => plan.age >= getYears(user.birthDay))
                setPlans(planForAge)

            }

        }
        getPlans();

    }, [user])
    
    const isPlanRecommended = (plan: string) => {

        return plan === 'Plan en Casa y Clínica'

    }

    const isPlanSomeone = (plan: string, price:number) => {

        return plan === 'Para alguien más' ? 0.95 * price : price;

    }

    const highlightPhrases = (text: string) => {

        return text.replace(new RegExp(`(${KEYWORDS.join('|')})`, 'gi'), '<b>$1</b>');

    }

    const handleSelectPlan = ({ name, price }: GetPlans) => {

        const selectPlan = { name, price: isPlanSomeone(selectedUserPlan, price) };
        savePlan(selectPlan)
        navigate('/resumen')

    }

    return (
        <div className="plans__plans">
            {
                selectedUserPlan.length > 0 && plans.map((plan, index) => (
                    <div key={plan.name} className="card card--noHover" >
                        <div>
                            {
                                isPlanRecommended(plan.name) &&
                                <p className="plans__plans__recommended">Plan recomendado</p>
                            }
                            <img src={index % 2 === 0 ? ImageHome : ImageHospital} alt="plan icon" className="plans__plans__image" />
                            <h2 className="plans__plans__title">{plan.name}</h2>
                            <p className="plans__plans__costTitle">COSTO DEL PLAN</p>
                            {
                                selectedUserPlan === "Para alguien más" &&
                                <p className="plans__plans__previewCost">{`$${plan.price} antes`}</p>
                            }
                            <p className="plans__plans__price">
                                {
                                    `$${isPlanSomeone(selectedUserPlan, plan.price)} al mes`
                                }
                            </p>
                            <hr className="plans__plans__line" />
                            <ul>
                                {
                                    plan.description.map((description: string, index: number) => (
                                        <li key={index} className="plans__plans__description">{parse(highlightPhrases(description))}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        <Button type="button" onClick={() => handleSelectPlan(plan)} className="button--pink" text="Seleccionar Plan" />
                    </div>
                ))
            }
        </div>
    );

}
