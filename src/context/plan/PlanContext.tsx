
import { createContext } from 'react';

export interface PlanStateType {
    name: string;
    price: number | null;
}

interface PlanContextType {
    plan: PlanStateType;
    savePlan: (planData: PlanStateType) => void;
}

const PlanContext = createContext({} as PlanContextType);

export default PlanContext;