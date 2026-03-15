"use client";
import { useRouter, usePathname } from "next/navigation";

interface TabItemProps {
  href: string;
  active?: boolean;
  children: string;
}
export const TabItem = (props: TabItemProps) => {
  const { children, active, href } = props;
  const router = useRouter();
  const pathname = usePathname();
  const activeNow = pathname == href;

  const defaultText =
    "font-medium text-text-A gap-[10px] leading-[19px] text-sm";
  const activeText =
    "font-medium text-text-AAA gap-[7px] leading-[24px] text-base";

  const handleTabClick = () => {
    router.push(href);
  };

  return (
    <div
      className={`flex flex-col h-11 flex-auto justify-center items-center cursor-pointer ${active || activeNow ? activeText : defaultText}`}
      onClick={handleTabClick}
    >
      <div className="flex relative h-full items-center">
        {children}
        <div
          className={`${active || activeNow ? "w-full h-0.75 bg-palette-brand-400 rounded-t-2xl absolute bottom-0" : ""}`}
        ></div>
      </div>
    </div>
  );
};
