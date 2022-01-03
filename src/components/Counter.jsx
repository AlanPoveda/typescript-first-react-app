import { useState } from "react";

export function Counter(){
    
    //Hook de useState para que vai mudar em tela
    const [counter, setCounter] = useState(0);

    //Recebe dois dados, aquele que vai alterar e a função de alterção, dessa forma foi alterar

    function increment(){
        setCounter(counter +1);
    }
    function decrement(){
        setCounter(counter -1);
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
            <button type="button" onClick={decrement}>Decrement 1</button>
        </div>
    );
}