import { ReactNode } from "react";

interface TabsProps {
  children?: ReactNode;
}
export const Tabs = (props: TabsProps) => {
  const { children } = props;
  return (
    <div className="flex w-full bg-bg-AAA gap-2.5 border-b-divider-AA border-d border-solid">
      {children}
    </div>
  );
};
