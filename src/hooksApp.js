import React from 'react'
import { MultipleCustomHooks } from './components/usingUseFetch/MultipleCustomHooks'
// import { CounterWithCustomHooks } from './useState/CounterWithCustomHooks'
// import { SimpleForm } from './useEffect/simpleForm'
// import { FormWithCustomHooks } from './useForm(custom hook para manejar formularios)/FormWithCustomHooks'

import './index.css'

export const HooksApp = () => {
    return (
        <div>
            {/* <CounterWithCustomHooks/> */}
            {/* <SimpleForm></SimpleForm> */}
            {/* <FormWithCustomHooks /> */}
            <MultipleCustomHooks />
        </div>
    )
}
