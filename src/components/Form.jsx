import { nanoid } from 'nanoid'
import React, { useState } from 'react'

const Form = () => {
    //hooks-estados
    const[name, setName]=useState('')
    const[lastName, setLastName]=useState('')
    const[id,setId]=useState('')
    const[userList, setUserList]=useState([])
    const[editMode, setEditMode]=useState(false)
    
    //register function
    const register=(e)=>{
        e.preventDefault()
        //validate form
        if (!name.trim()) {
            alert('Please enter a name')
            return
        }if (!lastName.trim()) {
            alert('Please enter a lastname')
            return
        }
        //add to the list
        setUserList(
            [
                ...userList,{name, lastName,id:nanoid(4)}
            ]
        )
        //clean states
        setName("")
        setLastName("")
    }
     //edit function
     const editUser=(e)=>{
        e.preventDefault()
        //validate form
        if (!name.trim()) {
            alert('Please enter a name')
            return
        }if (!lastName.trim()) {
            alert('Please enter a lastname')
            return
        }
        //add to the list
        const editList=userList.map((item)=>item.id===id ?
        {
            id:id,
            name:name,
            lastName:lastName
            
        }:
        item
        )
        setUserList(editList)
        //clean states
        setName("")
        setLastName("")
        setId(""),
        setEditMode(false)
    }

    //delete user
    const deleteUser= (id) =>{
        const filteredList=userList.filter((item)=>item.id!==id)
        setUserList(filteredList)
    }

    //Edit prepare the edit mode
    const edit=(item) =>{
        setEditMode(true)//We active the edit mode
        setName(item.name)
        setLastName(item.lastName)
        setId(item.id)
    }


  return (
    <>
    <article>
        <form onSubmit={ editMode ? editUser : register}>
            <h2>User form</h2>
            <label htmlFor="name">
                Name
                <input type="text"
                id='name'
                placeholder='Enter your first name'
                onChange={(e)=>setName(e.target.value)}
                value={name}
                />
            </label>
            <label htmlFor="lastName">
                Last Name
                <input type="text"
                id='lastName'
                placeholder='Enter your last name'
                onChange={(e)=>setLastName(e.target.value)}
                value={lastName}
                />
            </label>
            {
            editMode ? (<button type='submit'>Edit</button>): (<button type='submit'>Submit</button>)
            }
        </form>
        
    </article>
    <article>
        <h2>Register users</h2>
        <ol>
            {userList.map((item, index)=>(
            <li key={index}>{item.name} {item.lastName}
            <button className='secondary' onClick={()=>deleteUser(item.id)}>Delete</button>
            <button className='contrast' onClick={()=>edit(item)}>Edit</button>
            </li>))}
        </ol>
    </article>
    </>
  )
}

export default Form