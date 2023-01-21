import { useState, useEffect } from "react";

function CustomButton() {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        document.title = `Count (${counter})`;
    }, [counter]);

    return (
        <button onClick={() => setCounter(counter + 1)}>
            Count ({counter})
        </button>
    );
}

export default CustomButton;