import {useState, useRef, useEffect} from 'react';
export const App = ()=>{
    const [stateCount, setStateCount] = useState(0);
    const countRef = useRef(0);

    useEffect(()=>{
        console.log("Component re-rendered!")

    })
    const incrementRef = ()=>{
        countRef.current+=1;
        // the reason u can see the updated result after pressing increase state is that because
        // during re-render component reads the current value of countRef
        console.log("countRef:", countRef.current);
    }

    const incrementState = ()=>{
        setStateCount(stateCount+1)
    }
    return(
        <div>
            {console.log("Rendering")}
            <p>State Count : {stateCount}</p>
            <p>countRef (Cant see) : {countRef.current}</p>
            <button onClick={incrementRef}>increase Ref</button>
            <button onClick={incrementState}>increase State</button>
        </div>
    )
}