import { NavLink } from "react-router-dom";

const ErrorPage = ({err}) => {
    return(
        <div className="w-full min-h-screen bg-container flex flex-col justify-center items-center p-4">
            <img src="../../public/blue_star.png" width={200} />
            <h1 className="text-gold text-2xl font-bold mt-10">OH NOOOO</h1>
            <h3 className="text-text text-md text-center mt-4 font-light">Những vì sao có vẻ như đang lạc lối. Chúng tôi không thể tìm thấy trang bạn đang tìm 🌌</h3>

            <NavLink to={"/"} className="text-black bg-gold px-10 mt-6 py-2 rounded-xl font-bold w-60 text-center">Quay về trang chủ</NavLink>
            <NavLink to={"/"} className="text-ultimate-background bg-transparent px-12 mt-2 py-2 rounded-xl font-bold border border-ultimate-background w-60 text-center">Tìm hỗ trợ</NavLink>
        </div>
    )
}

export default ErrorPage;