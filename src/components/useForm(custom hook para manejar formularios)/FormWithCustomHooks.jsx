import React from 'react'
import { useForm } from '../Hooks/useForm'

export const FormWithCustomHooks = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
    })

    const {name, email} = formValues


    return (
        <div>
            <h1>FormWithCustomHooks</h1>
            <hr />

            <form action="">
                <input 
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="nombre"
                    value={name}
                    onChange={ handleInputChange }
                />
                <input 
                    type="text"
                    name="email"
                    autoComplete="off"
                    placeholder="email"
                    value={email}
                    onChange={ handleInputChange }
                />
            </form>
        </div>
    )
}

