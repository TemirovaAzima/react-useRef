import {useRef} from "react";

export const App = ()=>{
    const inputRef = useRef(null);
    const focusInput =()=>{
        inputRef.current.focus();
        inputRef.current.value='Enter ur name girlies'
    }
    return(
        <div>
            <input
            ref={inputRef}
            type="text"
            placeholder='Enter something'/>
            <button onClick={focusInput}>focus</button>
        </div>
    )
}
