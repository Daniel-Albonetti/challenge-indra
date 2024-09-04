
import { FC, ReactNode, useState } from 'react';
import PlanContext, { PlanStateType } from './PlanContext';

interface PlanStateProps {
    children: ReactNode;
}

const PlanState: FC<PlanStateProps> = ({ children }) => {

    const initialState: PlanStateType = {
        name: '',
        price: null
    }

    const [ plan, setPlan ] = useState<PlanStateType>(initialState)

    const savePlan = (planData: PlanStateType) => {
        
        setPlan(planData)

    }

    return (
        <PlanContext.Provider
            value={{
                plan,
                savePlan
            }}
        >
            { children }
        </PlanContext.Provider>
    )
}

export default PlanState;