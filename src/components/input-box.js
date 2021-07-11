import React,{useState} from 'react'
import '../static/input.css'
import List from '../components/list.js'

function Input({list,add_to_list}){
    const [key, set_key] = useState(0) 
    const [desc,set_desc]=useState("")

    const reset =()=>{
        set_desc("")
    }
     
    return (
        <>
        <div className="input-container">
            <input type="text" value={desc} onChange={(e)=>{
                set_desc(e.target.value)
                set_key(list.length+1)
            }} />
            <button type="button" onClick={()=>{
                add_to_list({key,desc})
                reset()
            }} >Add</button>
        </div>
        
        </>
    )
}

export default Input;