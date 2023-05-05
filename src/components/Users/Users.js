import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleUser from "../SingleUser/SingleUser";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="user-component">
      <h2 className="text-3xl font-semibold ">Total user: {users.length}</h2>
      <div className="all-users grid grid-cols-3 gap-6 ">
        {users.length > 0 ? (
          users.map((user) => (
            <SingleUser user={user} key={user.id}></SingleUser>
          ))
        ) : (
          <h2>No user found</h2>
        )}
      </div>
    </div>
  );
};

export default Users;
