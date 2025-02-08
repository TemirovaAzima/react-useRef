import {useState, useRef, useEffect} from 'react';

export default function App (){
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setCount((prevCount)=> prevCount + 1)
        },1000);
        return(()=> {clearInterval(intervalRef.current)})
    },[]);

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={()=>clearInterval(intervalRef.current)}>Stop</button>
        </div>
    );
};