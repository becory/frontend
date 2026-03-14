import { Layout, Tabs, TabItem } from "@/components";
import { Filter } from "@/components/Filter";
import { List } from "@/components/List";
import { ListItem } from "@/components/ListItem";
import { SearchBar } from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex min-h-screen w-full max-w-3xl flex-col items-center bg-bg-AA sm:items-start">
        <Layout
          title="所有捐款項目"
          leftNavigate={<img src="arrow-left.svg" />}
        >
          <SearchBar filter={<Filter />}>
            <Tabs>
              <>
                <TabItem active>公益團體</TabItem>
                <TabItem>捐款項目</TabItem>
                <TabItem>義賣商品</TabItem>
              </>
            </Tabs>
          </SearchBar>
          <List>
            <ListItem></ListItem>
          </List>
        </Layout>
      </div>
    </div>
  );
}
