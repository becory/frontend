export const ListItem = () => {
  return (
    <div className="flex gap-3 bg-bg-AAA rounded-xl p-2.25 pr-3 h-20.5 items-center">
      <div className="w-16 h-16 flex items-center justify-center border-palette-black-10 rounded-[9px] border border-solid">
        <img className="w-full h-full" src="dropdown.svg" />
      </div>
      <div className="flex flex-col gap-0.75">
        <h3 className="text-base font-medium leading-6 align-middle">
          公益團體名稱公益團體名稱公益團
        </h3>
        <p className="text-[13px] align-middle text-text-AA font-normal leading-5">
          團體簡介團體簡介團體簡介團體簡介團體
        </p>
      </div>
    </div>
  );
};
