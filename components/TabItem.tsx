import { ReactNode } from "react";

interface TabItemProps {
  active?: boolean;
  children: string;
}
export const TabItem = (props: TabItemProps) => {
  const { children, active } = props;
  const defaultText =
    "font-medium text-text-A gap-[10px] leading-[19px] text-sm";
  const activeText =
    "font-medium text-text-AAA gap-[7px] leading-[24px] text-base";
  return (
    <div
      className={`flex flex-col h-11 flex-auto justify-center items-center ${active ? activeText : defaultText}`}
    >
      <div className="flex relative h-full items-center">
        {children}
        <div
          className={`${active ? "w-full h-0.75 bg-palette-brand-400 rounded-t-2xl absolute bottom-0" : ""}`}
        ></div>
      </div>
    </div>
  );
};
