import React, { useState } from "react";
import watch1 from "../assets/watch1.png";
import watch2 from "../assets/watch2.png";
import watch3 from "../assets/watch3.png";
import watch4 from "../assets/watch4.png";
import watch5 from "../assets/watch5.png";
import watch6 from "../assets/watch6.png";
import watch7 from "../assets/watch7.png";
import watch8 from "../assets/watch8.png";

const Products = () => {
  const [availableItems] = useState([
    {
      id: 1,
      name: "Watch 1",
      imageUrl: watch1,
      description:
        "GOLDEN HOUR Waterproof Sport Women's Digital Chronograph Silicone Strap Watch",
    },
    {
      id: 2,
      name: "Watch 2",
      imageUrl: watch2,
      description:
        "GOLDEN HOUR Waterproof Sport Women's Digital Chronograph Silicone Strap Watch",
    },
    {
      id: 3,
      name: "Watch 3",
      imageUrl: watch3,
      description:
        "GOLDEN HOUR Waterproof Sport Women's Digital Chronograph Silicone Strap Watch",
    },
    {
      id: 4,
      name: "Watch 4",
      imageUrl: watch4,
      description:
        "GOLDEN HOUR Waterproof Sport Women's Digital Chronograph Silicone Strap Watch",
    },
    {
      id: 5,
      name: "Watch 5",
      imageUrl: watch5,
      description:
        "GOLDEN HOUR Waterproof Sport Women's Digital Chronograph Silicone Strap Watch",
    },
    {
      id: 6,
      name: "Watch 6",
      imageUrl: watch6,
      description:
        "GOLDEN HOUR Waterproof Sport Women's Digital Chronograph Silicone Strap Watch",
    },
    {
      id: 7,
      name: "Watch 7",
      imageUrl: watch7,
      description:
        "GOLDEN HOUR Waterproof Sport Women's Digital Chronograph Silicone Strap Watch",
    },
    {
      id: 8,
      name: "Watch 8",
      imageUrl: watch8,
      description:
        "GOLDEN HOUR Waterproof Sport Women's Digital Chronograph Silicone Strap Watch",
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleWatchClick = (watch) => {
    const existing = selectedItems.find((item) => item.id === watch.id);
    if (existing) {
      // Increase quantity
      setSelectedItems(
        selectedItems.map((item) =>
          item.id === watch.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new watch with quantity = 1
      setSelectedItems([...selectedItems, { ...watch, quantity: 1 }]);
    }
  };
  
  const handleDeleteWatch = (id) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Product List</h1>

      {/* Main Watch List */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {availableItems.map((watch) => (
          <div
            key={watch.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
            onClick={() => handleWatchClick(watch)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={watch.imageUrl}
              alt={watch.name}
              className="w-32 h-32 object-contain rounded hover:scale-105"
            />
            <h2 className="text-lg font-bold mt-2">{watch.name}</h2>
            <p className="text-gray-600 text-sm">{watch.description}</p>
            <p className="text-xs text-gray-500 mt-1">(Click image to add)</p>
          </div>
        ))}
      </div>

      {/* Selected Watches */}
      {selectedItems.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-center mt-10">
            Add Card
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {selectedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-32 h-32 object-contain rounded"
                />
                <h2 className="text-lg font-bold mt-2">{item.name}</h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <p className="font-bold mt-1">Quantity: {item.quantity}</p>
                <button
                  onClick={() => handleDeleteWatch(item.id)}
                  className="bg-red-500 text-white rounded px-3 py-1 text-sm mt-2"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
