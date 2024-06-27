"use client";
import React from "react";

interface Props {
  name: string;
  placeholder: string;
  value: string;
  type: string;
  onChange?: any;
}

const Input = ({ name, placeholder, onChange, value, type }: Props) => {
  return (
    <input
      name={name}
      type={type}
      // style={{ backgroundColor: "#F3F3F3" }}
      className="appearance-none border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full mb-2.5"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></input>
  );
};

export default Input;
