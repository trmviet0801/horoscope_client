import { NavLink, useNavigate } from "react-router-dom";

const PostItem = ({ post }) => {
    const navigate = useNavigate();
    const url = `${post.postId}`
  return (
    <div onClick={() => navigate(url)} className="bg-container-box flex flex-col items-center gap-4 p-4 rounded-xl">
      <div className="flex flex-row justify-between gap-4">
        <h1 className="text-gold font-bold">{post.title}</h1>
        <p className="text-text font-thin text-sm bg-small-box h-fit p-2 rounded-xl">{post.publishDate}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-text font-medium text-sm line-clamp-6">{post.content}</p>
        <NavLink to={`post/${post.postId}`} className='text-gold text-sm font-bold ml-auto'>Đọc toàn bộ →</NavLink>
      </div>
    </div>
  );
};

export default PostItem;
