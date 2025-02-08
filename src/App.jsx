import {useState, useRef} from 'react';

export const App = ()=>{
    const [message, setMessage] = useState("Waiting...");
    const timeoutRef = useRef(null);

    const startTimeout = ()=>{
        clearTimeout(timeoutRef.current);
        setMessage("Waiting..");
        timeoutRef.current = setTimeout(()=>{
            setMessage('Timeout Finished!');
        },5000);
    };

    const cancelTimeout = ()=>{
        clearTimeout(timeoutRef.current);
        setMessage("Timeout Cancelled!");
    };

    return(
        <div>
            <h2>{message}</h2>
            <button onClick={startTimeout}>Start TimeOut</button>
            <button onClick={cancelTimeout}>Cancel TimeOut</button>
        </div>
    )
}