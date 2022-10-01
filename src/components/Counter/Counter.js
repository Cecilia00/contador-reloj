import './Counter.css'
import Button from '../Button/Button.js'
import { useState, useRef, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count + 1)
    }

    const rest = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }


    const [timer, setTimer] = useState(false);
    const interval = useRef();

    useEffect(() => {
        return () => clearInterval(interval.current);
    }, [])

    useEffect(() => {
        if ( timer && count >=0) {
            interval.current = setInterval(() =>
                setCount((count) => count + 1),
                1000);
        }

        else {
            clearInterval(interval.current);
            interval.current = null;
        }
    }, [timer]);

    function toggleTimer() {
        setTimer((timer) => !timer);
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={add}>Aumentar</button>
            <button onClick={rest}>Disminuir</button>
            <button onClick={reset}>Resetear</button>
            <button onClick={toggleTimer} disabled= {count>=0 ? false : true}>{timer ? "Detener cronómetro" : "Iniciar cronómetro"}</button>


        </div>
    )
}

export default Counter