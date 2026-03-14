export const Filter = () => {
  return (
    <div>
      <button className="flex gap-0.75 py-1.5 px-3 bg-palette-gray-100 rounded-md">
        <div className="text-text-AA font-medium text-sm leading-[22px]">
          全部
        </div>
        <div className="flex items-center">
          <img src="dropdown.svg" />
        </div>
      </button>
    </div>
  );
};
