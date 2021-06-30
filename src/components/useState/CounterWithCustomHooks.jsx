import React from 'react'
import { useCounter } from '../../Hooks/useCounter.js'

export const CounterWithCustomHooks = () => {

    const {state, increment, decrement, reset} = useCounter()

    return (
        <div>
            <h1>Counter with hook: { state } </h1>
            <hr />

            <button onClick={increment}>+ 1</button>
            <button onClick={decrement}>- 1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
