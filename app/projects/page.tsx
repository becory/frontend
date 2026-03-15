"use client";
import {
  Tabs,
  TabItem,
  Divider,
  Filter,
  List,
  ListItem,
  NotFound,
  SearchBar,
  Loading,
} from "@/components";
import { menu } from "@/menu";
import { useCharities } from "@/resource/useCharities";
import { useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";

export default function Projects() {
  const handleOnSearch = (q: string) => {};

  return (
    <>
      <SearchBar filter={<Filter />} onSearch={handleOnSearch}>
        <Tabs>
          {menu.map((item) => (
            <TabItem href={item.href} key={item.href}>
              {item.title}
            </TabItem>
          ))}
        </Tabs>
      </SearchBar>
      <NotFound />
    </>
  );
}
