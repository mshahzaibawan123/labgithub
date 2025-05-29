import React from 'react';

const ItemList = () => {
  const items = ['Apple', 'Banana', 'Orange', 'Mango'];
  
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} data-testid={`item-${index}`}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
