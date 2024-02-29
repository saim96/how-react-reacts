import { useState } from "react";

export default function Counter () {
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount((count) => count += 1);
    }
    const addThree = () => {
        setCount((cc) => cc + 1); //Callback format used to update the state since it depended on prev. state
        setCount((cc) => cc + 1);
        setCount((cc) => cc + 1);

    }
    return (
        <div>
        <p> Count: {count}</p>
        <button onClick={addOne}> +1 </button>
        <button onClick={addThree}> +3 </button>

        </div>
    )
}