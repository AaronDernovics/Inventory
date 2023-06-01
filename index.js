
import React, {useState, }  from "react";
import ReactDOM from "react-dom/client";
import './Button.css';



var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();



const ItemFollower = () => {
  const [newName, setNewName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [items, setItems] = useState(["Item1", "Item2", "Item3"]);
 




  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleAdd = () => {
    const newItems = [...items];
    const number = newItems.length + 1;
    newItems.push("Item" + number);
    setItems(newItems);
  };

  const handleRename = (index) => {
    const newItems = [...items];
    newItems[index] = newName;
    setItems(newItems);
    setEditingIndex(null);
    setNewName("");
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewName(items[index]);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <>
      <h1>Inventory</h1>
      <h2>{date}   {time}</h2>
      <button onClick={handleAdd}>Add New Item</button>
      <h3>Item Quantity</h3>
      <ul>

        {items.map((item, index) => (
          <li key={index}>
            
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={newName}
                  onChange={handleNameChange}
                />
                <div className="buttons">
                <button onClick={() => handleRename(index)}>Save</button>
                <button onClick={() => setEditingIndex(null)}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <span>{item}</span>
             
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </>
            )}
          </li>
        ))}


      </ul>
     
    </>
  );
};




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ItemFollower/>)