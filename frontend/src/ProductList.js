import React, { useState, useEffect } from "react";

function ProductList() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [editId, setEditId] = useState(null);

  const API_URL = "http://localhost:5000/items"; 

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setItems(data);
  };
  
  const addItem = async () => {
    if (editId) {
      await fetch(`${API_URL}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, quantity }),
      });
      setEditId(null);
    } else {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, quantity }),
      });
    }
    setName("");
    setQuantity(1);
    fetchItems();
  };
  
  const deleteItem = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    fetchItems();
  };
  
  const editItem = (item) => {
    setEditId(item._id);
    setName(item.name);
    setQuantity(item.quantity);
  };
  
  return (
    <div>
      <h1>Product List</h1>
      <div className="form">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button onClick={addItem}>{editId ? "Update" : "Add"}</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} ({item.quantity})
            <div className="actions">
              <button onClick={() => editItem(item)}>Edit</button>
              <button onClick={() => deleteItem(item._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
