"use client";
import { ReactNode, useState } from "react";
import { TabItem } from "./TabItem";
import { Tabs } from "./Tabs";

interface SearchBarProps {
  children: ReactNode;
  filter: ReactNode;
}

export const SearchBar = (props: SearchBarProps) => {
  const { children, filter } = props;
  const [searchToggle, setSearchToggle] = useState(false);
  return (
    <div className={`flex flex-col ${!searchToggle && "gap-3"}`}>
      <div
        className={`flex flex-auto h-17.5 bg-bg-AAA justify-between items-center p-3.75 gap-3 ${searchToggle ? "block" : "hidden"}`}
      >
        <div className="flex flex-auto gap-2.25 bg-palette-black-5 px-2.25 py-3 rounded-[20px] items-center">
          <div>
            <img src="search.svg" />
          </div>
          <input className="w-full" placeholder="請輸入關鍵字"></input>
        </div>
        <button onClick={() => setSearchToggle(!searchToggle)}>取消</button>
      </div>
      {children}
      <div
        className={`flex justify-between items-center mx-3.75 ${searchToggle ? "hidden" : "block"}`}
      >
        {filter}
        <button
          className="p-2 rounded-full bg-palette-gray-100"
          onClick={() => setSearchToggle(!searchToggle)}
        >
          <img src="search.svg" />
        </button>
      </div>
    </div>
  );
};
