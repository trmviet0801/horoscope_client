import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ZodiacSignBox from "../components/ZodiacSignBox";
import BodyMenuItem from "../components/BodyMenuItem";
import Footer from "../components/Footer";
import { HOME_URL, TITLE } from "../utils/const";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(HOME_URL);
        if (!response.ok) throw { status: response.status, message: response.statusText };
        const result = await response.json();
        setData(result);
        setIsLoading(false)
      } catch (err) {
        setErr(err)
      }
    };
    fetchData();
  }, []);

  if (err !== null)
    return <ErrorPage err={err} />

  if (isLoading)
    return <LoadingPage />

  return (
    <div className="w-full h-full flex justify-center items-center bg-ultimate-background">
      <div className="bg-container w-full py-2 flex flex-col  items-center min-h-screen max-w-screen-4xl">
        <div className="m-2 w-full flex flex-col">
          <h1 className="text-gold font-bold text-center mt-4"><NavLink to={'/'}>{TITLE}</NavLink></h1>
        </div>
        <div className="w-full bg-small-container px-4 pt-8 my-8 block pb-10">
          <h1 className="text-center text-gold font-bold text-2xl mt-8">
            Lựa chọn cung hoàng đạo của bạn
          </h1>
          <h3 className="text-text text-center mb-8">
            Khám phá tử vi hàng ngày, đặc điểm tính cách và những insights từ vũ
            trụ của bạn
          </h3>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            {data?.map((item) => (
              <ZodiacSignBox
                name={item.name}
                startDay={item.startDay}
                endDay={item.endDay}
                imgSrc={item.image}
                id={item.id}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-10 mt-18 justify-center max-w-11/12 min-w-80   ">
          <BodyMenuItem
            imgSrc="blue_star.png"
            title="Tử vi hằng ngày"
            description="Bài viết tử vi hàng ngày cá nhân hóa và những hướng dẫn vũ trụ dành cho bạn."
            button="Đọc ngay"
            url={"/post"}
          />
          <BodyMenuItem
            imgSrc="yellow_star.png"
            title="Tương thích tình yêu"
            description="Khám phá cách mà cung hoàng đạo của bạn phù hợp với những người khác trong tình yêu và các mối quan hệ."
            button="Kiểm tra ngay"
            url="/love"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
