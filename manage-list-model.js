import React, { useState } from 'react';

function ListManager() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [newItem, setNewItem] = useState('');

  const handleNewItemChange = (event) => {
    setNewItem(event.target.value);
  }

  const handleAddItem = (event) => {
    event.preventDefault();
    setItems([...items, newItem]);
    setNewItem('');
  }

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  return (
    <div>
      <h2>My List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddItem}>
        <input type="text" value={newItem} onChange={handleNewItemChange} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default ListManager;
