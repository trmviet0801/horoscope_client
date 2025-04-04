const LoadingPage = () => {
    return (
        <div className="bg-container min-h-screen w-full flex flex-col justify-center items-center px-4">
            <img src="../../public/rec.png" className="animate-spin" width={120} />
            <h1 className="text-gold text-lg font-light text-center mt-10">Đang tải những bí ẩn vũ trụ của bạn, đừng lo, chờ xíu, sao trên trời cũng cần chút thời gian để xếp hàng...</h1>
            <h3 className="text-text font-thin text-sm text-center mt-4">Đang căn chỉnh với các vì sao... một chút nữa thôi</h3>
        </div>
    )
}

export default LoadingPage;