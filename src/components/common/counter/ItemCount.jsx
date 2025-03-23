import React, { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const handleAdd = () => setCount(count + 1);
  const handleSubtract = () => setCount(count > 1 ? count - 1 : 1);

  return (
    <div>
      <button onClick={handleSubtract}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;