import React, { useEffect, useRef } from "react";
import "./search.css";

interface SearchProps {
  value: string;
  onValueChange: (newValue: string) => void;
}

const Search = (props: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    value,
    onValueChange
  } = props;

  //TODO: use the useEffect hook to initially put focus on the input field
  // as soon as it has been added to the DOM. 
  // Note: you will need a ref bound to the input to call the focus() function on the input element.
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="search">
      <input
        value={value}
        ref={inputRef}
        className="input-search"
        placeholder={'filter items'}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  )
}

export default Search
