const BigTag = ({ title, content }) => {
    let style = "flex flex-col gap-2 p-4 bg-container-box rounded-2xl w-full  lg:w-1/5"
    if (title === 'Daily Overview')
        style = 'flex flex-col gap-2 p-4 bg-container-box rounded-2xl w-full  lg:w-full lg:mt-6'
    return (
        <div className={style}>
            <h1 className="text-gold text-md font-medium">{title}</h1>
            <h3 className="text-text font-thin text-sm">{content}</h3>
        </div>
    )
}

export default BigTag;