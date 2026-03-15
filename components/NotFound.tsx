interface NotFoundProps {
  title: string;
  description?: string;
}

export const NotFound = (props) => {
  const { title, description } = props;
  return (
    <div className="flex flex-col my-15 justify-center items-center gap-4.5 ">
      <div>
        <img src="notfound.svg" />
      </div>
      <div className="flex flex-col gap-1.5 justify-center items-center">
        <h3 className="font-medium text-text-AAA text-xl leading-7">{title}</h3>
        <p className="font-normal text-text-A text-sm leading-5.5">
          {description}
        </p>
      </div>
    </div>
  );
};
