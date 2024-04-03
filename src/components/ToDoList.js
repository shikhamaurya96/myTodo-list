import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {filterList,completedList,editList,addList } from '../store/storeSlice'

const ToDoList = () => {
 const listValues = useSelector((store)=>store.list.list)
  const dispatch = useDispatch();
  // console.log(listValues);
  function handleDelete(el){
    dispatch(filterList(el.inp))
  }
  function handleCheckbox(e,index){
   let newList = listValues.map((el,i)=> {
    //console.log(">>"+i)
    if(i==index){
      return {...el, isCompleted:!el.isCompleted}
    }else{
      return el
    }
   } );  
   dispatch(completedList(newList))   
  }
 function handleEdit(el){
  
 dispatch(editList(el))
 handleDelete(el)
 }
  return (
    <div className='m-auto bg-teal-400 w-1/2 h-3/4 rounded-md p-6 overflow-y-auto'>
    { listValues.map((el,index)=>
   <div className='bg-white p-4 rounded-lg text-xl mt-2' style={{textDecoration:el.isCompleted?"line-through":"none"}}>
    <input type='checkbox' className='w-6 h-6 mr-3 accent-lime-500'  onChange={()=>handleCheckbox(el,index)} />
    {el.inp}
   <div className='float-right flex'>
    <button className='mr-4' onClick={()=>handleEdit(el)}><img src='./images/edit.png' alt='edit' className='w-6 h-6'/></button>
   <button  onClick={()=>handleDelete(el)}><img src='./images/delete.webp' alt='delete' className='w-6 h-6 '/></button>
   <p className='ml-6 text-sm'>{el.fullDate}</p></div>
   </div>
    )}
    </div>
  )
}

export default ToDoList