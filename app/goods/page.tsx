import { Layout, Tabs, TabItem } from "@/components";
import { Divider } from "@/components/Divider";
import { Filter } from "@/components/Filter";
import { List } from "@/components/List";
import { ListItem } from "@/components/ListItem";
import { SearchBar } from "@/components/SearchBar";
import { menu } from "@/menu";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SearchBar filter={<Filter />}>
        <Tabs>
          {menu.map((item) => (
            <TabItem href={item.href} key={item.href}>
              {item.title}
            </TabItem>
          ))}
        </Tabs>
      </SearchBar>
      <List>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <Divider />
      </List>
    </>
  );
}
