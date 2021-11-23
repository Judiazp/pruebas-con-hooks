import React from 'react';

const ShowIncrement = React.memo(({ increment }) => {
    console.log('hola mundo');
    return (
        <button onClick={ () => increment(1) } >+1</button>
    );
});

export default ShowIncrement;