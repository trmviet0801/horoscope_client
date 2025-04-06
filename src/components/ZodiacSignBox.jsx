import { NavLink } from "react-router-dom";
import { DAILY_OVERVIEW } from "../utils/const";

const ZodiacSignBox = ({ name, startDay, endDay, imgSrc, id }) => {
  return (
    <NavLink to={`daily/${id}`} className="bg-container-box w-fit px-8 py-2 rounded-2xl border-r border-l border-solid border-red-50 text-center">
      <img src={`../../public/${imgSrc}`} alt="" width={90}/>
      <h3 className="text-gold font-bold ">{name}</h3>
      <div className="text-center">
        <p className="text-text text-xs">
          {startDay} - {endDay}
        </p>
      </div>
    </NavLink>
  );
};

export default ZodiacSignBox;
