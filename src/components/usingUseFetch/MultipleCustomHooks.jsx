import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { useFetch } from '../../Hooks/useFetch'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { author, quote } = !!data && data[0]

    return (
        <div>
            <h1>BreakingBads</h1>
            <hr />

            {
                 loading ? (
                    <div className="loading" align="center">
                        Loading...
                    </div>
                )
                    
                : (
                    <blockquote className="blockquote">
                        <p> { quote } </p>
                        <footer> { author } </footer>
                    </blockquote>
                )
            }

            <button onClick={ increment }>
                Siguiente
            </button>

        </div>
    )
}
