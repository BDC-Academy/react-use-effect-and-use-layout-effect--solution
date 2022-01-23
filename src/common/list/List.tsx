import React, { useEffect, useRef } from "react";
import './list.css';

export interface ListItem {
  id: string;
  label: string;
  color: string;
}

export interface ListProps {
  selectedItemId?: string;
  /**
   * items to fill the list with
   */
  items: ListItem[];
  /**
   * callback / event fired when a list item is clicked
   */
  onItemClick: (item: ListItem) => void;
}

const List = (props: ListProps) => {
  const listRef = useRef<HTMLUListElement>(null);

  const {
    items,
    onItemClick,
    selectedItemId,
  } = props;

  //TODO: use the correct effect hook to make the bottom border of the list dashed
  // when the selected item is not visible, i.e. is not present in the items list.
  // Note: you can use a ref or state to do this.
  useEffect(() => {
    if (!!selectedItemId && !items.some(({ id }) => id === selectedItemId)) {
      (listRef.current as HTMLUListElement).style.borderBottomStyle = "dashed";
    } else {
      (listRef.current as HTMLUListElement).style.borderBottomStyle = "solid";
    }
  }, [items, selectedItemId]);

  return (
    <ul className="list" ref={listRef}>
      {!!items.length && items.map((item) =>
        <li
          key={item.id}
          style={{ color: item.color }}
          onClick={() => onItemClick(item)}
          className={`list-item${selectedItemId === item.id ? ' list-item-selected' : ''}`}
        >
          {item.label}
        </li>
      )}
      {
        !items.length &&
        <li className="list-item list-item-placeholder">
          no items here
        </li>
      }
    </ul>
  )
}

export default List;
