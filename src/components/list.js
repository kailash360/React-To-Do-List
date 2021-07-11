import React, { Component } from 'react'
import Row from './row.js'

import '../static/list.css'

function List({update_list,todo_list}){

    return(
        <div className="list-container">
        {todo_list.map(item=>{
            return(
                <><Row task={item.desc} update_list={update_list} key={item.key}></Row></>
            )
        })}
        </div>
    )
}

export default List;