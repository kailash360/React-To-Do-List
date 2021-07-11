import React ,{ useState } from 'react'
import logo from './logo.svg';
import './static/App.css';
import './static/list.css';
import Navbar from './components/navbar.js';
import Input from './components/input-box.js';
import List from './components/list.js'
import Row from './components/row.js'


function App() {

  const [todo_list, update] = useState([])

  const add_to_list=(new_task)=>{
    update([...todo_list,new_task])
  }

  const update_list=(task)=>{
    update(todo_list.filter(item=>{
      return item.desc!==task
    }))
  }

  console.log(todo_list)

  return( 
  <>
    <Navbar></Navbar>
    <Input list={todo_list} add_to_list={add_to_list}></Input>
    <List  update_list={update_list} todo_list={todo_list} className="list-container"></List>
  </>
  )
}

export default App;
