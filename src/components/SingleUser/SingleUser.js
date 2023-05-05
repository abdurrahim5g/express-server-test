import React from "react";

const SingleUser = ({ user }) => {
  const { email, avatar, first_name, last_name } = user;
  return (
    <div className="single-user-component shadow-lg rounded-lg py-3 px-4 ">
      <img src={avatar} alt="User Avater" className="rounded-lg shadow" />
      <h3>
        Name: {first_name} {last_name}
      </h3>
      <h3>Email: {email}</h3>
    </div>
  );
};

export default SingleUser;
