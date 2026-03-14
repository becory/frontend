interface ListItemProps {
  logo: string;
  name: string;
  children: string;
}

export const ListItem = (props: ListItemProps) => {
  const { logo, name, children } = props;
  return (
    <div className="flex gap-3 bg-bg-AAA rounded-xl p-2.25 pr-3 h-20.5 items-center ">
      <div className="w-16 h-16 flex-none flex items-center justify-center border-palette-black-10 rounded-[9px] border border-solid">
        <img className="w-full" src={logo} />
      </div>
      <div className="flex flex-auto flex-col gap-0.75 overflow-hidden">
        <h3 className="text-base font-medium leading-6 align-middle truncate">
          {name}
        </h3>
        <p className="text-[13px] align-middle text-text-AA font-normal leading-5 truncate">
          {children}
        </p>
      </div>
    </div>
  );
};
