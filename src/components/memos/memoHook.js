import React, {useMemo, useState} from 'react';
import { useCounter } from '../../Hooks/useCounter';

const MemoHook = () => {

    const { counter, increment } = useCounter( 10 )

    const [show, setShow] = useState(true)

    const heavyProcess = ( iteraciones ) => {
        for (let i = 0; i < iteraciones; i++) {
            console.log('Procesando...');
        }
        return `Se realizaron ${iteraciones} iteraciones`
    }

    const resultHeavyProcess = useMemo(() => heavyProcess( counter ), [ counter ] )

    return (
        <div>
            <h1>MemoHook </h1>

            <h1>Counter: { counter } </h1>
            <hr />

            <p> { resultHeavyProcess } </p>

            <button onClick={ increment }>
                +1
            </button>

            <button onClick={ () => setShow(!show) }>
                Show/hide { JSON.stringify(show) }
            </button>

        </div>
    );
};

export default MemoHook;