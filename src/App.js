import React,{useState} from "react";
import Todo from "./Todo";

function App() {
  const [input, setinput] = useState("")
  const [Items, setItems] = useState([])

  const inputEvents = (event) => {
      setinput(event.target.value)
  }
  const btnEvents = () => {
    setItems ((arrItems)=> {
      return [...arrItems, input]
    })
        setinput("")

  }
  const DeleteItems  = (id) => {
    setItems ((arrItems)=> {
           return arrItems.filter((arr,idx)=> {
            return idx!== id
           })

    })
  }
  return (
   <>
   <div className='main_div'>
     <div className='center_div'> <br/>
     <h1>Todo list App</h1> <br/>
     <input type='text' placeholder='Add a Items' onChange={inputEvents} value={input}/>
     <button onClick={btnEvents}>+</button>

<ol>
  {
    Items.map((itemsVa,idx)=> {
     return <Todo text={itemsVa}
     id ={idx}
     key ={idx}
     onSelect={DeleteItems}
     
      />
    } )
  }

</ol>

     </div>

   </div>
     </>
  );
}

export default App;
