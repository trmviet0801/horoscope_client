import { useParams } from "react-router-dom";
import { GET_POST_URL, GET_SUGGEST_POSTS, TITLE } from "../utils/const";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import SuggestPost from "../components/SuggestPost";
import Footer from "../components/Footer";

const SpecificPostPage = () => {
  const { postId } = useParams();
  const [data, setData] = useState(null);
  const [recommend, setRecommend] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        let response = await fetch(GET_POST_URL(postId));
        if (!response.ok) throw new Error("can not get post");
        let result = await response.json();
        setData(result);

        response = await fetch(GET_SUGGEST_POSTS(3));
        if (!response.ok) throw new Error("can not get post");
        result = await response.json();
        setRecommend(result);

        setIsLoading(false);
      } catch (e) {
        setIsError(true);
        console.log(e);
      }
    };

    fetchData();
  }, [postId]);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage />;

  return (
    <div className="w-full h-full flex justify-center items-center bg-ultimate-background">
      <div className="bg-container w-full py-2 flex flex-col  items-center min-h-screen max-w-screen-4xl">
        <div className="m-2 w-full flex flex-col">
          <h1 className="text-gold font-bold text-center mt-4">
            <NavLink to={"/"}>{TITLE}</NavLink>
          </h1>
        </div>
        {data !== null && recommend !== null && (
          <div className="w-full p-4 flex flex-col gap-4 lg:flex-row">
            <div className="w-full bg-container-box flex flex-col items-center p-4 rounded-2xl">
              <div className="flex flex-row gap-4 w-full">
                <p className="text-text text-sm font-thin">
                  {data.publishDate}
                </p>
                <p className="text-text text-sm font-thin">5 min read</p>
              </div>
              <h1 className="text-gold text-2xl font-bold mt-10">
                {data.title}
              </h1>
              <p className="text-text font-normal mt-6">{data.content}</p>
            </div>
            <div className="w-full flex flex-col gap-4 lg:flex-1/2">
              <div className="w-full bg-container-box flex flex-col p-4 rounded-2xl">
                <h1 className="text-gold text-2xl font-bold mt-4">
                  Gợi ý bạn đọc
                </h1>
                {recommend.map((post) => (
                  <SuggestPost post={post} />
                ))}
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default SpecificPostPage;
