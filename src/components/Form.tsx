"use client";
import React, { useActionState, useEffect, useRef } from "react";
import { createUser } from "@/action/user.action";
import SubmitButton from "./SubmitButton";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [data, action] = useActionState(createUser, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (data.success) {
      formRef.current?.reset();
    }
  }, [data]);

  const submitForm = async (data: FormData) => {
    await action(data);
  };

  return (
    <form
      ref={formRef}
      action={submitForm}
      className="w-full max-w-lg bg-wgite p-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold bm-6 text-gray-800">
        Добавить сотрудника
      </h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
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
          htmlFor="email"
        >
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
          htmlFor="password"
        >
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
          htmlFor="confirmPassword"
        >
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
        <SubmitButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" />
      </div>
      {data?.success && (
        <p className="text-green-500">Данные успешно добавлены</p>
      )}
      {data.message && <p className="text-red-500">{data.message}</p>}
    </form>
  );
};

export default Form;
