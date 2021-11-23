import React from 'react'
import MemoHook from './components/memos/memoHook'
// import Memorize from './components/memos/Memorize'
// import { ExampleUseRef } from './components/useRef/ExampleUseRef'
// import { MultipleCustomHooks } from './components/usingUseFetch/MultipleCustomHooks'
// import { CounterWithCustomHooks } from './useState/CounterWithCustomHooks'
// import { SimpleForm } from './useEffect/simpleForm'
// import { FormWithCustomHooks } from './useForm(custom hook para manejar formularios)/FormWithCustomHooks'

import './index.css'

export const HooksApp = () => {
    return (
        <div>
            {/* <CounterWithCustomHooks/> */}
            {/* <SimpleForm/> */}
            {/* <FormWithCustomHooks /> */}
            {/* <MultipleCustomHooks /> */}
            {/* <ExampleUseRef /> */}
            {/* <Memorize /> */}
            <MemoHook />
        </div>
    )
}
