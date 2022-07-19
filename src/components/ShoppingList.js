import { useState, React } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const selectedItems = items.filter( item => {
    if(selectedCategory === 'All') {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  })

  const handleFilter = (e) => {
    setSelectedCategory( e.target.value );
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={ handleFilter }>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
