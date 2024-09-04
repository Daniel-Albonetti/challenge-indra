
import { FormEvent, useContext, useState } from 'react';
import Arrow from '../../assets/img/vector.png';
import { useForm } from '../../hooks/useForm';
import Button from '../ui/Button';
import { fetchApi } from '../../helpers/fetchApi';
import AuthContext from '../../context/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

interface FormState {
    document: number
    documentNumber: string | number
    cellphone: string | number
    privacy: boolean
    comunications: boolean
}

interface GetUser {
    name: string;
    lastName: string;
    birthDay: string;
}

export const Form = () => {

    const navigate = useNavigate()
    const { saveUser } = useContext(AuthContext)

    const [ msgError, setMsgError ] = useState<string>('')

    const [ formValues, handleInputChange ] = useForm<FormState>({
        document: 1,
        documentNumber: '',
        cellphone: '',
        privacy: false,
        comunications: false
    })

    const { document, documentNumber, cellphone, privacy, comunications } = formValues;

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (isFormValid()) {

            const resp: any = await fetchApi('https://rimac-front-end-challenge.netlify.app/api/user.json');
            const result: GetUser = await resp.json();

            if (result) {
                
                const { name, lastName, birthDay } = result;
                const userData = { name, lastName, birthDay, document, documentNumber, cellphone, privacy, comunications }
                saveUser(userData);
                navigate('/planes');

            } 
        }

    }

    const isFormValid = (): boolean => {

        if (!documentNumber || documentNumber === 0) {

            setMsgError('*El DNI es requerido')
            return false

        }else if (!cellphone || cellphone === 0) {
            
            setMsgError('*El Celular es requerido')
            return false
            
        }else if (!privacy) {

            setMsgError('*Debe aceptar la política de privacidad');
            return false;

        } else if (!comunications) {

            setMsgError('*Debe aceptar la política de comunicaciones');
            return false;

        }

        setMsgError('');
        return true;

    }

    return (
        <form onSubmit={ handleSubmit }>
            <hr className="home__line" />
            <p className="home__description">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
            <div className="forms">
                <div className="input__dni">
                    <div className="input__dni__type">
                    <img src={Arrow} alt="" />
                    <select
                        name="document"
                        value={ document }
                        onChange={ handleInputChange }
                    >
                        <option value={1}>DNI</option>
                        <option value={2}>CE</option>
                        
                    </select>
                    </div>
                    <div>
                        <label>
                            <span>Nro. de documento</span>
                            <input
                                type="text"
                                name="documentNumber"
                                pattern="[0-9]*"
                                minLength={8}
                                maxLength={12}
                                value={ documentNumber }
                                onChange={ handleInputChange }
                            />
                        </label>
                    </div>
                </div>
                <div className="input__cellphone">
                    <label>
                        <span>Celular</span>
                        <input 
                            type="tel"
                            name="cellphone"
                            pattern="[0-9]*"
                            minLength={9}
                            maxLength={9}
                            value={ cellphone }
                            onChange={ handleInputChange }
                        />
                    </label>
                </div>
            </div>
            <div className="home__terms">
                <div>
                    <label className="checkbox" >
                        <input
                            type="checkbox"
                            name="privacy"
                            checked={ privacy }
                            onChange={ handleInputChange }
                        />
                        <span> Acepto la Política de Privacidad</span>
                    </label>
                </div>
                <div>
                    <label className="checkbox">
                        <input
                            type="checkbox"
                            name="comunications"
                            checked={ comunications }
                            onChange={ handleInputChange }
                        />
                        <span> Acepto la Política Comunicaciones Comerciales</span>
                    </label>
                </div>
                <a href="/" className="home__termsAndConditions">Aplican Términos y Condiciones.</a>
            </div>

            {
                msgError && 
                (
                    <div className="home__alert-error">
                        <p className="home__error">{ msgError }</p>
                    </div>
                )
            }

            <div className="boxButton">
                <Button type="submit" text="Cotiza aquí" className="button--black" />
            </div>
        </form>
    )

}
