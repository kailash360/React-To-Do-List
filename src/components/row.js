import React, { Component } from 'react'
import '../static/row.css'

function Row ({task,update_list,key}){

    return(
    <>
        <div className="row">
            <p>{task}</p>
            <button type="button" onClick={()=>{
                update_list(task)
                }}>X</button>
        </div>
    </>
    )
    
}

export default Row;