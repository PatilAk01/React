import React, { useState } from 'react';

export const FunctionComponent = () => {
    const [count, setCount] = useState(0);

    const inc = () => setCount(count + 1);
    const dec = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div>
            <h1>--------------------------------------</h1>
            <h1>Welcome to my channel</h1>
            <p>Counter value is: <strong>{count}</strong></p>
            <button type='button' onClick={inc}>Count ++</button>
            <button type='button' onClick={dec}>Count --</button>
            <button type='button' onClick={reset}>Reset</button>
        </div>
    );
}

export default FunctionComponent;
