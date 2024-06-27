import React from "react";

interface Props {
  toggleMenu: () => void;
}

const MenuButton = ({ toggleMenu }: Props) => {
  return (
    <button
      onClick={() => {
        toggleMenu();
      }}
      className="p-2 rounded-full bg-charade-500 text-black md:hidden focus:outline-none"
    >
      {false ? (
        <svg
          className="block h-6 w-6 transition-all transform rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M2 6h20v3H2V6Z" fill="white"></path>,
          <path d="M2 15h20v3H2v-3Z" fill="white"></path>
        </svg>
      )}
    </button>
  );
};

export default MenuButton;
