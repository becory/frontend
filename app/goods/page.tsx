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

export default function Page() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [q, setQ] = useState("");
  const { loading, data, hasNext } = useCharities(page, limit, q);

  const handleLoadMore = () => {
    setPage((page) => page + 1);
  };

  const handleOnSearch = (q: string) => {
    setQ(q);
    setPage(1);
  };

  const [infinitRef, { rootRef }] = useInfiniteScroll({
    loading,
    onLoadMore: handleLoadMore,
    hasNextPage: hasNext,
  });
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
      {loading && page == 1 && (
        <div className="flex flex-auto my-59">
          <Loading />
        </div>
      )}
      {q && data.length == 0 && <NotFound />}
      <List ref={rootRef}>
        {data.map((item) => (
          <ListItem name={item.name} key={item.id} logo={item.logo}>
            {item.description}
          </ListItem>
        ))}
        {hasNext ? (
          <Loading ref={infinitRef} />
        ) : (
          data.length > 0 && <Divider />
        )}
      </List>
    </>
  );
}
