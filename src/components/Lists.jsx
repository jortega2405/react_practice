import React, { useState } from 'react'

const Lists = () => {

    const InitList = ['Soccer', 'Baseball', 'Basketball', 'Volleyball']
    const ObjectList = [
        {id:1, description: "Worldwide"},
        {id:2, description: "North America"},
        {id:3, description: "North America"},
        {id:4, description: "Asia"}
    ]
    const [lists, setLists] = useState(InitList)
    const [objectList, setObjectList] = useState(ObjectList)

    const addItem=()=>{
        setObjectList([
            ...objectList,{id:5,description:"South America"}
        ])
    }
  return (
    <>
    <article>
        <h3>Lists</h3>
        <ul>
        {
            lists.map((item, index)=>(<li key={index}> {item} </li> ))
        }
        </ul>
    </article>
    <article>
        <h3>Object List</h3>
        <ul>
        {
            objectList.map((item)=>(<li key={item.id}> {item.description} </li> ))
        }
        </ul>
        <button onClick={addItem}> Add item</button>
    </article>

    </>
  )
}

export default Lists