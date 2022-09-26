import { useEffect, useState } from "react";
import { UserType } from "../../@types/responseType";

export const User = ({ users }: { users: UserType[] | undefined }) => {
  const [selectedUser, setSelectedUser] = useState<UserType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (selectedUser?.id.toString() === e.currentTarget.dataset.id) return;
    setIsLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/users/${e.currentTarget.dataset.id}`
    )
      .then((data) => data.json())
      .then((res) => setSelectedUser(res))
      .then(() => setIsLoading(false));
  };

  const renderUsers = (users: UserType[] | undefined) =>
    users?.map((el: UserType) => (
      <li key={el.id} data-id={el.id} onClick={handleClick} className="user">
        <p className="user__name">{el.name}</p>
      </li>
    ));

  return (
    <div className="container">
      <h1>User</h1>
      <div className=" innerContainer">
        <div className="users">
          <h2>Users list</h2>
          <ul>{renderUsers(users)}</ul>
        </div>
        <div>
          <h2>User Info</h2>
          {isLoading ? (
            "Loading"
          ) : (
            <>
              <p>
                <span>Username:</span> {selectedUser?.username}
              </p>
              <p>
                <span> Address:</span>{" "}
                {selectedUser
                  ? `${selectedUser?.address.city}, ${selectedUser?.address.street}, 
          ${selectedUser?.address.suite}`
                  : ""}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
