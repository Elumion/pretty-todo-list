import React, {
  Dispatch,
  useEffect,
  useRef,
  useState,
  useReducer,
  memo,
} from "react";
import { useItemsList } from "./hooks/useItemsList";
import { UserType } from "./@types/responseType";
import { default as renderTime } from "./hooks/useTime";
import User from "./components/User";
import "./stylesApp.css";

function App() {
  const [users, setUsers] = useState<UserType[]>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data: any) => data.json())
      .then((res: UserType[]) => setUsers(res));
  }, []);

  return (
    <div className="App ">
      <section className="user__section">
        <User users={users} />
      </section>
    </div>
  );
}

export default App;
