import React, { memo } from 'react';

const Small = memo(({value}) => {

    console.log('Me renderice nuevamente.');
    
    return (
        <small>
            { value }
        </small>
    );
})

export default Small;