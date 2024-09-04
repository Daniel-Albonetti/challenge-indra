
import { FC, ReactNode, useState } from 'react';
import AuthContext, { AuthStateType } from './AuthContext';

interface AuthStateProps {
    children: ReactNode;
}

const AuthState: FC<AuthStateProps> = ({ children }) => {

    const initialState: AuthStateType = {
        name: '',
        lastName: '',
        birthDay: '',
        document: null,
        documentNumber: '',
        cellphone: '',
        privacy: null,
        comunications: null
    }

    const [ auth, setAuth ] = useState<AuthStateType>(initialState)

    const saveUser = (userData: AuthStateType) => {
        
        setAuth(userData)

    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                saveUser
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthState;