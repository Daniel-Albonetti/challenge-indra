
import { ChangeEvent, useState } from 'react'

export const useForm = <T extends object>(initialState: T) => {

    const [ values, setValue ] = useState(initialState);

    const reset = (newFormState = initialState) => {

        setValue(newFormState)

    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        const { name, type, value, checked }: any = e.target;
        
        if (type === 'checkbox') {
            
            setValue({
                ...values,
                [name]: checked
            })

        } else {

            setValue({
                ...values,
                [name]: type === 'number' ? Number(value) : value
            })

        }

    }

    return [ values, handleInputChange, reset ] as const

}
