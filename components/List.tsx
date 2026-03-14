import { ReactNode } from "react";

interface ListProps {
  children: ReactNode;
}
export const List = (props: ListProps) => {
  const { children } = props;
  return <div className="flex flex-col my-3 mx-3">{children}</div>;
};
