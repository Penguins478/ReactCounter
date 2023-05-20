import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(1)

    return (
        <div>
            <h2>{count}</h2>
            <br></br>
            <button onClick={() => setCount(count + 1)}> Click +1 </button>
            <br></br>
            <button onClick={() => setCount(count - 1)}> Click -1 </button>
        </div>
    )
}

export default Counter;