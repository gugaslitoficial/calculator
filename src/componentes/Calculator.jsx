'use client'

import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState();
    const [operator, setOperator] = useState();

    function inputNum(e) {
        var input = e.target.value;
        if (num === 0) {
        setNum(input);
        } else {
        setNum(num + input);
        }
    }

    function clear() {
        setNum(0);
    }

    function porcentage() {
        setNum(num / 100);
    }

    function changeSign() {
        if (num > 0) {
        setNum(-num);
        } else {
        setNum(Math.abs(num));
        }
    }

    function operatorHandler(e) {
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate() {
        if (operator === "/") {
        setNum(parseFloat(oldnum) / parseFloat(num));
        } else if (operator === "X") {
        setNum(parseFloat(oldnum) * parseFloat(num));
        } else if (operator === "-") {
            console.log(oldnum)
            console.log(num)
            console.log(oldnum-num)
        setNum(parseFloat(oldnum) - parseFloat(num));
        } else if (operator === "+") {
        setNum(parseFloat(oldnum) + parseFloat(num));
        }
    }

    return (
        <div className='principal' style={{marginTop:"5em"}}>
            <div className='calculadora'> 
                <h1 className="result">{num}</h1>
                <button className='' onClick={clear}>AC</button>
                <button className='' onClick={changeSign}>+/-</button>
                <button className='' onClick={porcentage}>%</button>
                <button className='orange' onClick={operatorHandler} value={"/"}>/</button>
                <button className='gray' onClick={inputNum} value={7}>7</button>
                <button className='gray' onClick={inputNum} value={8}>8</button>
                <button className='gray' onClick={inputNum} value={9}>9</button>
                <button className='orange' onClick={operatorHandler} value={"X"}>X</button>
                <button className='gray' onClick={inputNum} value={4}>4</button>
                <button className='gray' onClick={inputNum} value={5}>5</button>
                <button className='gray' onClick={inputNum} value={6}>6</button>
                <button className='orange' onClick={operatorHandler} value={"-"}>-</button>
                <button className='gray' onClick={inputNum} value={1}>1</button>
                <button className='gray' onClick={inputNum} value={2}>2</button>
                <button className='gray' onClick={inputNum} value={3}>3</button>
                <button className='orange' onClick={operatorHandler} value={"+"}>+</button>
                <button className='gray' onClick={inputNum} value={0}>0</button>
                <button className='gray' onClick={inputNum} value={"."}>,</button>
                <button className='gray' style={{ visibility: "hidden"}}>,</button>
                <button className='orange' onClick={calculate}>=</button>
            </div>
        </div>
    );
}