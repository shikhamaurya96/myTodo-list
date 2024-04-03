import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addList } from '../store/storeSlice';
import { useSelector } from 'react-redux';
const AddToDo = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((store)=>store.list.list)
  const filteredItemList = itemList.filter((item)=>item.isCompleted===true);
  const edit = useSelector((store)=>store.list.editableItem)
  const [input,setInput] = useState("");

  useEffect(()=>{
    setInput(edit.inp);
  },[edit])
  
  function handleList(){
     const date = new Date()
     let myDate = date.getDate()
     let month = date.getMonth();
     let year = date.getFullYear();
    let fullDate = `${myDate}/${month}/${year}`;
    //console.log(myDate)
      dispatch(addList({inp:input,isCompleted:false,fullDate:fullDate}))
      setInput("");
  }
  return (
     <div className='bg-emerald-500 m-auto mt-12 h-max w-1/2 p-4 rounded-md'>
    <div className=' flex justify-center p-6'>
     <input type='text' placeholder=' Enter your today task...' className='w-3/4 rounded-lg text-xl bg-emerald-400 text-white p-3 outline-none' value={input} onChange={(e)=>setInput(e.target.value)}/> 
    <button className='w-14' onClick={handleList}><img src='./images/add-icon.png'/></button>    
  </div> 
  <div className='flex justify-between'>
  <p className='mt-4 font-bold text-xl text-center text-white'>Total : {itemList.length}</p>
  <p className='mt-4 font-bold text-xl text-center text-white'>Completed : {filteredItemList.length} </p>
  </div>
  
   
  </div>
    
  )
}

export default AddToDo  