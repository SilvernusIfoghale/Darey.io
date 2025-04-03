import React from "react";

const ListComponent = ({ items, renderItem }) => {
  if (!items || items.length === 0) {
    return <p>No items found.</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default ListComponent;
