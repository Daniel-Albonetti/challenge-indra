
import { createContext } from 'react';

export interface AuthStateType {
    name: string;
    lastName: string;
    birthDay: string;
    document: number | null;
    documentNumber: number | string;
    cellphone: number | string;
    privacy: boolean | null;
    comunications: boolean | null;
}

interface AuthContextType {
    auth: AuthStateType;
    saveUser: (userData: AuthStateType) => void;
}

const AuthContext = createContext({} as AuthContextType);

export default AuthContext;