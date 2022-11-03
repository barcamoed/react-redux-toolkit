import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { ordered,reStocked } from './cakeSlice';

export default function CakeView(props) {
    const cakesCount = useSelector((state)=>state.cake.numberOfCakes);
    const [value,setValue] = useState(1);
    const dispatch = useDispatch()
    const orderCake=()=>{
        dispatch(ordered());
    }
    const reStockCake=()=>{
        dispatch(reStocked(Number(value)));
    }
  return (
    <>
    <h1>Cakes Count: {cakesCount}</h1>
    <button onClick={orderCake}>Order Cake</button>
    <input type='number' value={value} onChange={(e)=>setValue(e.target.value)}/>
    <button onClick={reStockCake}>Restock Cakes</button>
    </>
  )
}
