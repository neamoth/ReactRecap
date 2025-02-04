import React from 'react';

function Counter(){
    const [value, setValue] = React.useState(0)
    function increment(){
        setValue(value + 1);
        
    }
    function decrement(){
        setValue(value - 1);
        
    }
    function reset(){
        setValue(0);
    }
    return (
        <section className="counter">
            <div className="counter-container">
            <button onClick={decrement}>-</button>
            <h2>Count: {value}</h2>
            <button onClick={increment}>+</button>
            </div>
            <div className="reset-btn">
            <button onClick={reset} className='reset'>Reset</button>
            </div>
        </section>
    );
}

export default Counter;