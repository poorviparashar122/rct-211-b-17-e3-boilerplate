import {useState} from "react";

export const useCounter = (init) => {
// const {initialValue,minValue,maxValue}=init;
const [count,setCount]=useState(init.initialValue);
const incCount=(V)=>{
    if(count<init.maxValue){
 if(V==null){
    setCount(count+1)
 }
 else{
    setCount(count+V)
 }
}}
const decCount=(V)=>{
    if(count>init.minValue){
        if(V==null){
            setCount(count-1)
        }
        else{
            setCount(count-V)
        }
    }
}
return {count,incCount,decCount};

};
