import { useNavigate } from "react-router-dom";
import { GET_POST_URL } from "../utils/const";

const SuggestPost = ({post}) => {
    const navigate = useNavigate();
    const url = '/post/' + post.postId;

    return (
        <div onClick={() => navigate(url)} className="w-full flex flex-col gap-2 mt-4">
            <p className="text-gold text-sm">{post.publishDate}</p>
            <h1 className="text-white text-lg">{post.title}</h1>
            <p className="text-text text-sm line-clamp-3">{post.content}</p>
        </div>
    )
}

export default SuggestPost;