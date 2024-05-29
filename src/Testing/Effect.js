import { useState } from "react";
function Effect() {
    const [count, setCount] = useState(0);
    return (
        <div className="Effect">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
    }