import React from 'react'
import '../static/input.css'
import List from '../components/list.js'

function Input({list,add_to_list}){
     
    let new_task;
    return (
        <>
        <div className="input-container">
            <input type="text" onChange={(e)=>{
                new_task={
                    key:list.length+1,
                    desc:e.target.value
                }
            }} />
            <button type="button" onClick={()=>{
                add_to_list(new_task)
            }} >Submit</button>
        </div>
        
        </>
    )
}

export default Input;