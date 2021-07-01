import React, { useState } from 'react'
import { MultipleCustomHooks } from '../usingUseFetch/MultipleCustomHooks'

//El useRef funciona para hacer referencia a una variable y cambiarla sin disparar nuevamente una renderización

export const ExampleUseRef = () => {

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div>
            <h1>ExampleUseRef</h1>

            { show && <MultipleCustomHooks /> }
            <button onClick={ handleClick }>
                { show ? 'Ocultar' : 'Mostrar' }
            </button>
        </div>
    )
}
