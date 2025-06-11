"use client";
import React, { useRef } from "react";
import { createUser } from "@/action/user.action";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const submitForm = async (data: FormData) => {
    formRef.current?.reset();
    await createUser(data);
  };

  return (
    <form
      ref={formRef}
      action={submitForm}
      className="w-full max-w-lg bg-wgite p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold bm-6 text-gray-800">
        Добавить сотрудника
      </h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name">
          Имя
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-normal"
          id="name"
          name="name"
          type="text"
          placeholder="Имя"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email">
          email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-normal"
          id="email"
          name="email"
          type="email"
          placeholder="email"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password">
          Пароль
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-normal"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="confirmPassword">
          Повторить пароль
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-normal"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Повторить пароль"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
          type="submit">
          Отправить
        </button>
      </div>
    </form>
  );
};

export default Form;
