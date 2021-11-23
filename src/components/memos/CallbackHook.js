import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

    const [count, setCount] = useState(10)

    const increment = useCallback( (num) => {
        setCount( c => c + num)
    }, [ setCount ])

    return (
        <div>
            <h1>useCallback Hook: { count }</h1>
            <hr />

            <ShowIncrement increment={ increment } />
        </div>
    );
};

export default CallbackHook;