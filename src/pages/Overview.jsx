import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DAILY_OVERVIEW, TITLE } from "../utils/const";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import Tag from "../components/Tag";
import BigTag from "../components/BigTag";
import { constructPropertyName } from "../utils/helper";
import Categories from "../components/Categories";
import { CAGETORIES_URL } from "../utils/const";
import Footer from "../components/Footer";

const OverviewPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState(null);
  const [isErr, setIsErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(DAILY_OVERVIEW + id);
        const secondResponse = await fetch(CAGETORIES_URL(id));
        if (!response.ok) throw { err: response.statusText };
        if (!secondResponse.ok) throw { err: secondResponse.statusText };

        const result = await response.json();
        const secondResult = await secondResponse.json();
        setData(result);
        setCategories(secondResult);
        setIsLoading(false);
      } catch (err) {
        console.log(err)
        setIsErr(true);
      }
    };
    fetchData();

    return () => controller.abort();
  }, [id]);

  if (isLoading) return <LoadingPage />;

  if (isErr) return <ErrorPage />;

  return (
    <div className="w-full h-full flex justify-center items-center bg-ultimate-background">
      <div className="bg-container w-full py-2 flex flex-col  items-center min-h-screen max-w-screen-4xl">
        <div className="m-2 w-full">
          <h1 className="text-gold font-bold text-center mt-4"><NavLink to={'/'}>{TITLE}</NavLink></h1>
        </div>

        {data != null && (
          <div className="w-full bg-small-container px-4 pt-8 my-8 pb-10 flex flex-col lg:flex-row lg:gap-10 lg:items-center">
            <div className="border border-gold w-fit rounded-2xl lg:h-fit">
              <img src={`../../public/${data.horoscope.image}`} width={120} />
            </div>
            <div>
              <h1 className="text-gold font-bold text-3xl mt-10">
                Tử vi {data.horoscope.name}
              </h1>
              <h2 className="text-text font-medium text-xl mt-2">
                {data.dayTime}
              </h2>
              {console.log(data)}
              <div className="flex flex-wrap gap-4 mt-4">
                <Tag title="Nguyên tố" content={data.horoscope.element} />
                <Tag title="Hành tinh" content={data.horoscope.planet} />
                <Tag title="Đặc trưng" content={data.horoscope.qualities[0]} />
              </div>
            </div>
          </div>
        )}

        {data != null && (
          <div className="w-full mt-10 flex flex-wrap gap-4 lg:justify-between p-4">
            {Object.entries(data.dailyOverview)
              .filter(([key]) => key != "id")
              .map(([key, value]) =>
                Array.isArray(value) ? (
                  <BigTag
                    title={constructPropertyName(key)}
                    content={`${value[0]}, ${value[1]}, ${value[2]}`}
                  />
                ) : (
                  <BigTag title={constructPropertyName(key)} content={value} />
                )
              )}
          </div>
        )}

        <Categories categories={categories} />
        <Footer />
      </div>
    </div>
  );
};

export default OverviewPage;