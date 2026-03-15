"use client";
import { ChangeEvent, KeyboardEvent, ReactNode, useState } from "react";

interface SearchBarProps {
  children: ReactNode;
  filter: ReactNode;
  onSearch: (q: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const { children, filter, onSearch } = props;
  const [inputValue, setInputValue] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setInputValue(e.target.value);
  };

  const handleOnKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") onSearch(inputValue);
  };

  const handleOnClickCancel = () => {
    setSearchToggle(!searchToggle);
    setInputValue("");
    onSearch("");
  };

  return (
    <div className={`flex flex-col ${!searchToggle && "gap-3"}`}>
      <div
        className={`flex flex-auto h-17.5 bg-bg-AAA justify-between items-center p-3.75 gap-3 ${searchToggle ? "block" : "hidden"}`}
      >
        <div className="flex flex-auto gap-2.25 bg-palette-black-5 px-2.25 py-3 rounded-[20px] items-center">
          <div>
            <img src="search.svg" />
          </div>
          <input
            className="w-full"
            placeholder="請輸入關鍵字"
            value={inputValue}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
          ></input>
        </div>
        <div className="items-center">
          <button
            className="text-theme-text-link font-normal text-base leading-6 cursor-pointer"
            onClick={handleOnClickCancel}
          >
            取消
          </button>
        </div>
      </div>
      {children}
      <div
        className={`flex justify-between items-center mx-3.75 ${searchToggle ? "hidden" : "block"}`}
      >
        {filter}
        <button
          className="p-2 rounded-full bg-palette-gray-100 cursor-pointer"
          onClick={() => setSearchToggle(!searchToggle)}
        >
          <img src="search.svg" />
        </button>
      </div>
    </div>
  );
};
