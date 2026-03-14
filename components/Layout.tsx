import { ReactNode } from "react";

interface LayoutProps {
  title: string;
  leftNavigate?: ReactNode;
  rightNavigate?: ReactNode;
  children?: ReactNode;
}
export const Layout = (props: LayoutProps) => {
  const { title, leftNavigate, rightNavigate, children } = props;
  return (
    <div className="flex w-full flex-col">
      <div className="flex h-11 w-full bg-primary justify-center"></div>
      <div className="flex h-11 w-full bg-primary justify-between items-center content-center font-bold text-text--AAA">
        <div className="flex w-7.25 flex-none justify-center">
          {leftNavigate}
        </div>
        <div className="flex w-64 flex-auto justify-center">{title}</div>
        <div className="flex w-6 flex-none justify-center">{rightNavigate}</div>
      </div>
      <main className="flex flex-col gap-3">{children}</main>
    </div>
  );
};
