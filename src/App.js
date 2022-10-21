import React, { useState }  from 'react'
import './App.css';
import ToDoList from './ToDoLists'


const App = () => {

  const [inputList, setInputList] = useState("")
  const [items, setItems] = useState([])
  const itemEvent = (e) => {
    setInputList(e.target.value)
  }
  const listOfItems = () => {
  setItems((oldItems)=>{
    return [...oldItems,inputList]
    
  })
  setInputList("")

  }
  const deleteItems = (id) => {
    
        setItems((oldItems)=>{
          return oldItems.filter((arrElem,index)=>{
            return index !== id;
          })
        })
        

    
        }
        const editItem = (id) => {
    
          console.log(id)
          
  
      
          }
  return (
  <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> ToDo List </h1>
         <br />
         < input type="text" placeholder="Add Items" onChange={itemEvent}
         value={inputList}/> 
         <button onClick={listOfItems}> + </button>

    <ol>
      {items.map( (itemval,index)=>{
        return(
        <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems} />
        )
      })}
    </ol>
    

    
    </div>
    
    </div>
     </>
  )

  function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }

}
export default App;