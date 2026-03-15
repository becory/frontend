"use client";
import { Tabs, TabItem, Filter, NotFound, SearchBar } from "@/components";
import { menu } from "@/menu";

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
      <NotFound title="目前沒有捐款項目" />
    </>
  );
}
