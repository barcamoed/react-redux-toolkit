import React,{ useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { ordered,reStocked } from './icecreamSlice';


export default function IcecreamView() {
    const icecreamCount = useSelector((state)=>state.icecream.numberOfIcecreams)
    const dispatch = useDispatch();
    const [value,setValue] = useState(1);
    const orderIcecream =()=>{
        dispatch(ordered())
    }
    const restockIcecream =()=>{
        dispatch(reStocked(Number(value)))
    }
  return (
    <>
    <h1>Icecream Count: {icecreamCount}</h1>
    <button onClick={orderIcecream}>Order Icecream</button>
    <input type='number' value={value} onChange={(e)=>setValue(e.target.value)}/>
    <button onClick={restockIcecream}>Restock Icecream</button>
    </>
  )
}
