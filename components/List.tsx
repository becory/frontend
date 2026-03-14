import { ReactNode } from "react";
import { IntersectionObserverHookRootRefCallback } from "react-intersection-observer-hook";
interface ListProps {
  ref: IntersectionObserverHookRootRefCallback;
  children: ReactNode;
}
export const List = (props: ListProps) => {
  const { children, ref } = props;
  return (
    <div ref={ref} className="flex flex-auto h-full flex-col p-3 gap-3">
      {children}
    </div>
  );
};
