
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { useState } from 'react';

export default function Calculator() {
    const [num,setNum] = useState(0);
    const [oldnum,setOldNum] = useState(0);
    const [operator,setOperator] = useState();

    function inputNum(e){
        var input = e.target.value
        if(num==0){
            setNum(input);
        }else{
            setNum(num + input);
        }
       

    }
    //zerar calculadora
    function clear(){
      setNum(0)
    }
    
    //porcentagem
    function porcentagem (){
       setNum(num / 100); //vai pegar o valor e dividir por 100
    }

    function changeSing(){
        if (num>0){
            setNum(-num);
        }else{
            setNum(Math.abs(num)); //mudar o sinal do numero
        }
    }

    function operatorhandler(e){
        var operatorInput=e.target.value
        setOperator(operatorInput)
        setOldNum(num);
        setNum(0);

    }

    function calculate(){
        if(operator==="/"){
            setNum(oldnum / num);
        }else if(operator=== "X"){
            setNum(oldnum*num)
        }else if(operator=== "-"){
            setNum(oldnum-num)
            
        }else if(operator=== "+"){
            setNum(parseFloat(oldnum)+parseFloat(num));
     }
    }
  return (
     
    <div>
      <Box m={5}/>
      <Container maxWidth="xs">
       <div className="wrapper">
           <Box m={12}/>
           <h1 className="result">{num}</h1>

        <button onClick={clear}>AC</button>
        <button>+/</button>
        <button onClick={porcentagem}>%</button>
        <button className="orange" onClick={ operatorhandler} value="/">/</button>
        <button className="gray" onClick={inputNum} value={7}>7</button>
        <button className="gray" onClick={inputNum} value={8}>8</button>
        <button className="gray" onClick={inputNum} value={9}>9</button>
        <button className="orange" onClick={ operatorhandler} value="X">X</button>
        <button className="gray" onClick={inputNum} value={4}>4</button>
        <button className="gray" onClick={inputNum} value={5}>5</button>
        <button className="gray" onClick={inputNum} value={6}>6</button>
        <button className="orange" onClick={ operatorhandler} value="-">-</button>
        <button className="gray" onClick={inputNum} value={1}>1</button>
        <button className="gray" onClick={inputNum} value={2}>2</button>
        <button className="gray" onClick={inputNum} value={3}>3</button>
        <button className="orange" onClick={ operatorhandler} value="+">+</button>
        <button className="gray" onClick={inputNum} value={0}>0</button>
        <button className="gray" onClick={inputNum} value=",">,</button>
        <button className="gray" style={{visibility:"hidden"}}>,</button>
        <button className="orange" onClick={calculate}>=</button>
        </div>
        </Container>
        </div>
  )
}
