import { useMemo, useState } from "react";
import PageNumberItem from "./PageNumberItem";

const PageNumber = ({ totalPage, onClickHandler, currentPage }) => {
  const [startIndex, setStartIndex] = useState(currentPage);

  const onIncreaseHandler = () => {
    if (startIndex + 6 <= totalPage) setStartIndex((pre) => pre + 1);
  };

  const onDecreaseHandler = () => {
    if (startIndex > 0) setStartIndex((pre) => pre - 1);
  };

  const items = useMemo(() => {
    const result = [];

    if (totalPage <= 6)
      for (let i = 1; i <= totalPage; i++)
        result.push(
          <PageNumberItem
            index={i - 1}
            onClickHandle={onClickHandler}
            currentPage={currentPage}
          />
        );
    if (totalPage > 6) {
        result.push(
        <PageNumberItem index={"←"} onClickHandle={onDecreaseHandler} />
      );
      for (let i = startIndex; i < startIndex + 5; i++)
        if (i <= totalPage)
            result.push(
            <PageNumberItem
              index={i}
              currentPage={currentPage}
              onClickHandle={onClickHandler}
            />
          );
          result.push(
        <PageNumberItem index={"→"} onClickHandle={onIncreaseHandler} />
      );
    }

    return result;
  }, [startIndex]);

  return (
    <div className="flex flex-row flex-wrap gap-2 mt-6">
      {items.length > 0 && items}
    </div>
  );
};

export default PageNumber;
