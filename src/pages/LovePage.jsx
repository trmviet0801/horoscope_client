import { useEffect, useState } from "react";
import { HOME_URL, TITLE } from "../utils/const";
import { NavLink } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import SignSelectBoard from "../components/SignSelectBoard";
import ButtonCheckRelationship from "../components/ButtonCheckRelationship";
import Footer from "../components/Footer";

const LovePage = () => {
  const [signs, setSigns] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const [firstSignId, setFirstSignId] = useState(null);
  const [secondSignId, setSecondSignId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(HOME_URL);
        if (!response.ok) throw { err: response.statusText };
        const result = await response.json();
        setSigns(result);
        setIsLoading(false);
      } catch (e) {
        console.log(e)
        setIsErr(true);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <LoadingPage />;
  if (isErr) return <ErrorPage />;

  return (
    <div className="w-full h-full flex justify-center items-center bg-ultimate-background">
      <div className="bg-container w-full py-2 flex flex-col  items-center min-h-screen max-w-screen-4xl">
        <div className="m-2 w-full flex flex-col">
          <h1 className="text-gold font-bold text-center mt-4"><NavLink to={'/'}>{TITLE}</NavLink></h1>
        </div>
        <div className="w-full bg-small-container px-4 pt-8 my-8 block pb-10">
          <h1 className="text-gold font-bold text-lg text-center">
            Kiểm tra tương thích tình cảm
          </h1>
          <h3 className="text-text font-thin text-center mt-6 text-sm">
            Khám phá cách cung hoàng đạo của bạn "bắt sóng" với người khác trong
            tình yêu, lãng mạn và các mối quan hệ – hợp nhau như "trời sinh một
            cặp" hay "định mệnh trêu đùa"? 😜💕
          </h3>
        </div>

        <div className="lg:flex lg:flex-row">
          {signs !== null && (
            <div className="flex flex-col mt-10 w-full justify-center items-center">
              <h1 className="text-gold font-bold">Bạn là</h1>
              <SignSelectBoard
                signs={signs}
                setPickedSign={setFirstSignId}
                selectedSignId={firstSignId}
              />
            </div>
          )}

          {signs !== null && (
            <div className="flex flex-col mt-10 w-full justify-center items-center">
              <h1 className="text-gold font-bold">Người ấy là</h1>
              <SignSelectBoard
                signs={signs}
                setPickedSign={setSecondSignId}
                selectedSignId={secondSignId}
              />
            </div>
          )}
        </div>

        <ButtonCheckRelationship
          firstSignId={firstSignId}
          secondSignId={secondSignId}
        />
        <Footer />
      </div>
    </div>
  );
};

export default LovePage;
