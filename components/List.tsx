import { ReactNode } from "react";

interface ListProps {
  children: ReactNode;
}
export const List = (props: ListProps) => {
  const { children } = props;
  return (
    <div className="flex flex-auto h-full flex-col py-3 px-3 gap-3">
      {children}
    </div>
  );
};
