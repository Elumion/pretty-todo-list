import React, { useState, useEffect, Dispatch, useReducer } from "react";

// export const useItemsList = (items:string[]) => {
//     const [itemsList, setItemsList] = useState(
//         items
//       );

//       useEffect(() => {
//         localStorage.setItem("items", JSON.stringify(itemsList));
//       }, [itemsList]);
//       return [itemsList,setItemsList];
// }

interface StateType {
  itemsList: string[];
}

const getItemsFromLocalStorage = (): string[] => {
  const items = localStorage.getItem("items");
  if (!items) return [];
  return JSON.parse(items);
};

const initialState: StateType = {
  itemsList: [],
};

const reducer = (state: StateType, action: any) => {
  // debugger;
  switch (action.type) {
    case "ADD_ITEM": {
      const newState = [...state.itemsList, action.payload];
      return { itemsList: newState };
      // return  {itemsList:newState};
    }
    case "RESET_ITEMS": {
      return { itemsList: [] };
    }
    default:
      return state;
  }
};

export const useItemsList = () => {
  const [state, dispatch]: any = useReducer<any>(reducer, initialState); //ініціалізація глобального стейта

  const { itemsList } = state ? state : { itemsList: [""] }; //деструктурізація з глобального стейту
  // const [itemsList, setItemsList] = useState(
  //   getItemsFromLocalStorage
  //   );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemsList));
  }, [itemsList]);
  return [itemsList, dispatch];
};
