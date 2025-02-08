import {useState, useRef,useEffect} from 'react'
export const App = ()=>{
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(null);

    useEffect(()=>{
        prevCountRef.current = count;
    },[count]);
    return (
        <div>
            <p>Current Count : {count}</p>
            <p>Previous Count : {prevCountRef.current}</p>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    )
}