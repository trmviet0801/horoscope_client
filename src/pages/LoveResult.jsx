import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { RELATIONSHIP_URL, TITLE } from "../utils/const";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import LoveResultBox from "../components/LoveResultBox";
import Footer from "../components/Footer";

const LoveResult = () => {
  const { firstId, secondId } = useParams();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [ isErr, setIsErr ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(RELATIONSHIP_URL(firstId, secondId));
        if (!response.ok) throw { err: response.statusText };

        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (err) {
        setIsErr(true);
      }
    };

    if (firstId != null && secondId != null) fetchData();
  }, []);

  if (isLoading) return <LoadingPage />;
  if (isErr) return <ErrorPage />;

  return (
    <div className="w-full h-full flex justify-center items-center bg-ultimate-background">
      {data != null && (
        <div className="bg-container w-full py-2 flex flex-col  items-center min-h-screen max-w-screen-4xl">
          <div className="m-2 w-full flex flex-col">
            <h1 className="text-gold font-bold text-center mt-4"><NavLink to={'/'}>{TITLE}</NavLink></h1>
          </div>
          {console.log(data)}
          {data != null && (
            <div className="w-full bg-small-container px-4 pt-8 my-8 pb-10 flex flex-row justify-center items-center lg:gap-10">
              <div className="flex flex-col gap-4 justify-center items-center">
                <img src={`/${data.firstSign.image}`} width={150} />
                <h1 className="text-gold text-lg font-bold">{data.firstSign.name}</h1>
              </div>

              <h1 className="text-text font-thin text-lg">&</h1>

              <div className="flex flex-col gap-4 justify-center items-center">
                <img src={`/${data.secondSign.image}`} width={150} />
                <h1 className="text-gold text-lg font-bold">{data.secondSign.name}</h1>
              </div>
            </div>
          )}

          <div className="flex flex-col justify-center items-center p-4 gap-4 lg:grid lg:grid-cols-3 lg:items-stretch">
            <LoveResultBox title={data.status} content={data.description} />
            <LoveResultBox title="Kết nối cảm xúc" content={data.emotionalConnection} />
            <LoveResultBox title="Giao tiếp" content={data.communication} />
            <LoveResultBox title="Tin tưởng và Trung thành" content={data.trustAndLoyalty} />
            <LoveResultBox title="Tiềm năng lâu dài" content={data.potential} />
            <LoveResultBox title="Lời khuyên" content={data.advices} />
          </div>

          <NavLink to={"/love"} className="text-black bg-gold px-10 mt-6 py-2 rounded-xl font-bold w-80 text-center">Kiểm tra cặp đôi khác</NavLink>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default LoveResult;
