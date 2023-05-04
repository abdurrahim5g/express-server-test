import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();

  return (
    <div className="phones">
      <ul className="grid grid-cols-3 gap-8">
        {phones.map((phone) => (
          <li key={phone.id}>
            <Link
              to={`/phone/${phone.id}`}
              className="text-blue-500 hover:text-red-500 font-bold text-center"
            >
              <img src={phone.image} alt="" className="w-full hover:scale-80" />
              <h3 className="text-center">{phone.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phones;
