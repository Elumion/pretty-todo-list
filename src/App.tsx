import React, {
  Dispatch,
  useEffect,
  useRef,
  useState,
  useReducer,
  memo,
} from "react";
import { useItemsList } from "./hooks/useItemsList";
import * as Res from "./@types/responseType";
import { default as renderTime } from "./hooks/useTime";

const App = memo(function App() {
  // const [itemsList, setItemsList]: any = useItemsList();
  const [itemsList, dispatch]: any = useItemsList();
  const timeDate = renderTime();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      // setItemsList([...i`temsList, value]);
      dispatch({
        type: "ADD_ITEM",
        payload: value,
      });
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const handleReset = () =>
    dispatch({
      type: "RESET_ITEMS",
    });

  const renderItems = (items: string[]) => items.map((el) => <li>{el}</li>);

  return (
    <div className="App">
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>OK</button>
        <button onClick={handleReset}>RESET</button>
      </div>
      <ul>{renderItems(itemsList)}</ul>
      <div style={{ width: "280px" }}>
        {timeDate[0]}
        <br />
        {timeDate[1]}
      </div>
    </div>
  );
});

export default App;
