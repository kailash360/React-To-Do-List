import React, { Component } from 'react'
import Row from './row.js'

import '../static/list.css'

function List({update_list,todo_list}){

    return(
        <div className="list-container">
            <p className="list-heading">My To-Dos</p>
        {  todo_list.length>0
            ?todo_list.map(item=>{
                return(<><Row task={item.desc} update_list={update_list} key={item.key}></Row></>)
            })
            : <div className="empty-list">Nothing to show here..</div>
        }
        </div>
    )
}

export default List;