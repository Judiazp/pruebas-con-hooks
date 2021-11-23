import React, {useState} from 'react';
import { useCounter } from '../../Hooks/useCounter';
import Small from './Small';

const Memorize = () => {

    const { counter, increment } = useCounter( 10 )

    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Counter: <Small value={ counter } /> </h1>
            <hr />

            <button onClick={ increment }>
                +1
            </button>

            <button onClick={ () => setShow(!show) }>
                Show/hide { JSON.stringify(show) }
            </button>

        </div>
    );
};

export default Memorize;