import "./App.css";

import React, { useEffect, useState } from "react";

import List, { ListItem } from "./common/list";
import Search from "./common/search";

const items: ListItem[] = [
  { id: "1", label: "Apples", color: "red" },
  { id: "2", label: "Blueberries", color: "blue" },
  { id: "3", label: "Pears", color: "green" },
  { id: "4", label: "Oranges", color: "orange" }
];

function App() {
  const [filterValue, setFilterValue] = useState("");
  const [selectedItem, setSelectedItem] = useState<ListItem>();
  const [filteredItems, setFilteredItems] = useState<ListItem[]>(items);
  const [searching, setSearching] = useState(false);

  const handleFilterChange = (value: string) => {
    setFilterValue(value)
  };

  const handleClick = (item: ListItem) => {
    setSelectedItem(item);
  }

  // const filteredItems = items.filter(({ label }) => label.toLowerCase().includes(filterValue.toLowerCase()));

  //TODO: 3. use the correct effect hook to clear the searchfield when the selectedItem changes.
  useEffect(() => {
    setFilterValue("");
  }, [selectedItem]);

  //TODO: 4. use the correct effect hook to delay the filtering of the list for 2 seconds.
  // The timer (setTimeout) must be started every time filteredValue changes.
  // Make sure to clear the old timeout when a new one is created (see what happens if you don't)
  // Note: You will need to store the filteredItems in state to be able to rerender.
  // Extra: add a visual indicator that tells the user the app is 'searching'.
  // Extra: if the searchfield is emptied, immediately show the whole list again (no delay).
  // Extra: lets put some debugger statements here and there and see what's going on.
  useEffect(() => {
    if (filterValue === "") {
      setFilteredItems(items);
    } else {
      setSearching(true);

      const timer = setTimeout(() => {
        setFilteredItems(items.filter(({ label }) => label.toLowerCase().includes(filterValue.toLowerCase())));
        setSearching(false);
      }, 1000);

      return () => {
        clearTimeout(timer);
        setSearching(false);
      }
    }
  }, [filterValue]);

  return (
    <div className="app">
      <div>
        <Search
          value={filterValue}
          onValueChange={handleFilterChange}
        />
        <List
          items={filteredItems}
          onItemClick={handleClick}
          selectedItemId={selectedItem?.id}
        />
        {!!searching && <div>...searching</div>}
      </div>
      <div className="app-content">
        Item selected: {selectedItem?.label || 'none'}
      </div>
    </div>
  );
}

export default App;
