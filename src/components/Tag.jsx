const Tag = ({ title, content }) => {
    return (
        <div className="bg-container-box flex flex-col justify-start p-4 rounded-x border border-white rounded-2xl">
            <h1 className="text-text text-sm font-light">{title}</h1>
            <h1 className="text-white text-sm font-bold">{ content }</h1>
        </div>
    )
}

export default Tag;