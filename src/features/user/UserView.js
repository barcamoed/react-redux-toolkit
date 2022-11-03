import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'


export default function UserView() {

    const dispatch = useDispatch();
    const users = useSelector((state)=>state.user);

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

  return (
    <>
    <h1>Users List</h1>
    {users.loading&&<div>Loading</div>}

     {!users.loading && users.error && <div>Error:{users.error}</div>}
     {
     <ul>
        {users.data && users.data.length>0 && users.data.map((item,index)=>(
            <li key={index}>{item.name}</li>
        ))}
     </ul>
      }   
    </>
  )
}
