import { useEffect, useState } from "react";
import { GET_POSTS_URL, TITLE } from "../utils/const";
import { NavLink } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import PostItem from "../components/PostItem";
import PageNumber from "../components/PageNumber";

const PostPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
          try {
            setIsLoading(true);
            const response = await fetch(GET_POSTS_URL(currentPage));
            if (!response.ok) throw { status: response.status, message: response.statusText };
            const result = await response.json();
            setData(result);
            setIsLoading(false)
          } catch (err) {
            setIsError(err)
          }
        };
        fetchData();
  }, [currentPage]);

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
        <div className="w-full bg-small-container px-4 pt-8 my-8 block pb-10">
          <h1 className="text-gold text-lg font-bold text-center">
            Tử Vi Mới Cập Bến – Vũ Trụ Nói Gì Về Bạn Hôm Nay?
          </h1>
        </div>
        {
            data !== null && (
                <div className='w-full p-4 mt-10 flex flex-col gap-4 justify-center items-center'>
                    {
                        data.posts.map(post => (
                            <PostItem post={post} />
                        ))
                    }
                    <PageNumber totalPage={data.totalPage} onClickHandler={setCurrentPage} currentPage={currentPage} />
                </div> 
            )
        }
      </div>
    </div>
  );
};

export default PostPage;
