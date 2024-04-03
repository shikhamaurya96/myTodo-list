import { createSlice } from "@reduxjs/toolkit";
 
const appSlice = createSlice(
    {
        name:"list",
        initialState:{
            list:JSON.parse(localStorage.getItem("list")),
            editableItem:{}
        },
        reducers:{
            addList:(state,action)=>{
                console.log(action.payload);
                state.list.push(action.payload);
                localStorage.setItem("list",JSON.stringify(state.list))
                
               // console.log(state.list)
            },
            filterList:(state,action)=>{
        const newList1 = state.list.filter((value)=>value.inp!==action.payload)
        state.list=newList1;
        localStorage.setItem("list",JSON.stringify(state.list))
            },
            completedList:(state,action)=>{
                state.list = action.payload;
                
            },
            editList:(state,action)=>{
             console.log(action.payload);
             state.editableItem = action.payload;
            }
        }
    }
)
export const {addList,filterList,completedList,editList}= appSlice.actions;
export default appSlice.reducer;