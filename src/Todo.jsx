import React from 'react'

const Todo = (props) => {
  return (
    <>
    <div className='todo_sty'>
    <i className="fa-regular fa-circle-xmark" onClick={()=> {
        props.onSelect(props.id)
    }}


    />
         <li>{props.text}</li>
         </div>
    </>
  )
}

export default Todo