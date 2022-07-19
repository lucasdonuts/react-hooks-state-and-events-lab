import { useState, React } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const appClass = darkMode ? "App dark" : "App light";

  const toggleDarkMode = () => {
    setDarkMode(() => !darkMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={ toggleDarkMode }>Dark Mode</button>
      </header>
      <ShoppingList items={ itemData } />
    </div>
  );
}

export default App;
