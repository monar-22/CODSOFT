import React, { useState } from "react";
import ToDoItem from "./TodoItem";
import InputArea from "./InputArea.jsx";


function App() {
  const [items, setItems] = useState([]);
  const [add, setAdd] = useState(""); 
  const [editId, setEditId] = useState(null);

  function handleClick() {
    if (add.trim() !== "") {
      if (editId !== null) {
    
        setItems((prevValue) => {
          const updatedItems = [...prevValue];
          updatedItems[editId] = add;
          return updatedItems;
        });
        
        setEditId(null);
      } else {
        
        setItems((prevValue) => [...prevValue, add]);
      }

      
      setAdd("");
    }
  }

  function deleteItem(id) {
    setItems((prevValue) => prevValue.filter((item, index) => index !== id));
  }

  function editItem(id) {
    const editedItem = items.find((item, index) => index === id);
    if (editedItem !== undefined) {
      setAdd(editedItem);
      setEditId(id);
    }
  }

  return (
    <>
      <div className="heading">
         <h1 style={{ textAlign: 'left' }}>To-Do List</h1>

      </div>
      <div className="container">
        <div className="inbox">
          <InputArea click={handleClick} add={add} setAdd={setAdd} editId={editId} />
        </div>
        <div className="listcon">
          <h1> Your list</h1>
          <div className="list">
            <ul type="square">
              {items.map((item, index) => (
                <ToDoItem key={index} id={index} item={item} del={deleteItem} edit={() => editItem(index)} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
