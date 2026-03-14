import { IntersectionObserverHookRefCallback } from "react-intersection-observer-hook";

interface LoadingProps {
  ref?: IntersectionObserverHookRefCallback;
}

export const Loading = (props: LoadingProps) => {
  const { ref } = props;
  return (
    <div ref={ref} className="flex flex-auto justify-center items-center">
      <img src="loading.svg" />
    </div>
  );
};
