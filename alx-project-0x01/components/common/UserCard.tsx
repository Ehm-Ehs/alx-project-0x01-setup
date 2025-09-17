import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">@{username}</p>
      <p className="text-gray-600 mt-2">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-gray-600">
        <strong>Phone:</strong> {phone}
      </p>
      <p className="text-gray-600">
        <strong>Website:</strong>{" "}
        <a
          href={`http://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline"
        >
          {website}
        </a>
      </p>
      <div className="mt-3">
        <p className="text-gray-600">
          <strong>Company:</strong> {company.name}
        </p>
        <p className="text-sm italic text-gray-500">"{company.catchPhrase}"</p>
      </div>
      <div className="mt-3 text-gray-600">
        <strong>Address:</strong>{" "}
        {`${address.suite}, ${address.street}, ${address.city}`}
      </div>
    </div>
  );
};

export default UserCard;
