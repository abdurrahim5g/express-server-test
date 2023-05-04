import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  const status = Object.keys(phone).length;

  const navigate = useNavigate();

  return (
    <div className="phone-component">
      {status !== 0 ? (
        <div className="phone-content ">
          <img src={phone.image} alt="" className="w-6/12" />
          <h2 className="font-semibold text-2xl text-slate-600 my-5">
            {phone.name}
          </h2>
          <h3 className="font-semibold text-2xl text-slate-600 my-5">
            Price: ${phone.price}
          </h3>
          <h3>{phone.description}</h3>
          <button
            onClick={() => navigate("/phones")}
            className="py-3 px-8 rounded-lg bg-blue-400 hover:bg-blue-500 text-2xl font-samibold text-white mt-10"
          >
            Go back
          </button>
        </div>
      ) : (
        <h2>No phone found</h2>
      )}
    </div>
  );
};

export default Phone;
