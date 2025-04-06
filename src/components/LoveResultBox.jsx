const LoveResultBox = ({ title, content }) => {
  if (Array.isArray(content)) {
    return (
      <div className="w-full p-4 flex flex-col bg-container-box rounded-2xl lg:h-full">
        <div className="flex flex-col p-4">
          <h1 className="text-gold text-lg font-bold">{title}</h1>
          <div className="flex flex-col mt-4" w-full>
            {
                content.map(content => (
                    <p className="text-text font-thin text-sm mt-2">{content}</p>
                ))
            }
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-4 flex flex-col bg-container-box rounded-2xl">
      <div className="flex flex-col p-4">
        <h1 className="text-gold text-lg font-bold">{title}</h1>
        <p className="text-text font-thin text-sm mt-4">{content}</p>
      </div>
    </div>
  );
};

export default LoveResultBox;
