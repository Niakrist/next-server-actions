import { IUser } from "@/interface/user.interface";
import React from "react";
import RemoveButton from "./RemoveButton";

interface IUserListProps {
  users: IUser[];
}

const UserList = ({ users }: IUserListProps) => {
  if (!users) return <div>Загрузка ...</div>;
  return (
    <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md mb-8">
      <h1 className="font-bold">Список сотрудников</h1>
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <li className="py-4 flex justify-between" key={user.id}>
            <span>{user.name}</span> <span>{user.email}</span>{" "}
            <RemoveButton id={String(user.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
