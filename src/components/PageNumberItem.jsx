const PageNumberItem = ({ index, onClickHandle, currentPage }) => {
  const numStyle =
    currentPage == index
      ? "text-sm font-bold text-gold"
      : "text-sm font-bold text-white";
  return (
    <div
      onClick={() => {
        onClickHandle(index);
      }}
      className="flex flex-row justify-center items-center bg-container-box w-8 rounded-sm p-2"
    >
      {
        Number.isInteger(index) && <p className={numStyle}>{index + 1}</p>
      }
      {
        !Number.isInteger(index) && <p className={numStyle}>{index}</p>
      }
    </div>
  );
};

export default PageNumberItem;
