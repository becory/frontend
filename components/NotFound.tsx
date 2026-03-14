export const NotFound = () => {
  return (
    <div className="flex flex-col my-15 justify-center items-center gap-4.5 ">
      <div>
        <img src="notfound.svg" />
      </div>
      <div className="flex flex-col gap-1.5 justify-center items-center">
        <h3 className="font-medium text-text-AAA text-xl leading-7">
          查無相關資料
        </h3>
        <p className="font-normal text-text-A text-sm leading-5.5">
          請調整關鍵字再重新搜尋
        </p>
      </div>
    </div>
  );
};
