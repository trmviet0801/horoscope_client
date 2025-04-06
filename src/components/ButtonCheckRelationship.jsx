import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ButtonCheckRelationship = ({ firstSignId, secondSignId }) => {
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(true);
  let style = 'bg-text p-4 mt-10 rounded-2xl';

  useEffect(() => {
    firstSignId !== null && secondSignId !== null
      ? setIsDisable(false)
      : setIsDisable(true);
  }, [isDisable, firstSignId, secondSignId]);

  if (!isDisable) {
    style = "bg-gold p-4 mt-10 rounded-2xl"
  } else {
    style = "bg-text p-4 mt-10 rounded-2xl"
  }
  return (
    <button
      onClick={() => navigate(`/love/result/${firstSignId}/${secondSignId}`)}
      disabled={isDisable}
      className={style}
    >
      <p className="text-black text-sm font-bold">Kiểm tra ngay</p>
    </button>
  );
};

export default ButtonCheckRelationship;
