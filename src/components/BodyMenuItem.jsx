const BodyMenuItem = ({ imgSrc, title, description, button }) => {
  return (
    <div className="bg-container-box flex-1 px-8 py-2 rounded-2xl border-solid border-red-50 text-center flex flex-col justify-center items-center">
      <img src={`../../public/${imgSrc}`} width={150} height={100} />
      <div className="w-full mt-6">
        <h1 className="text-gold text-xl font-bold">{title}</h1>
        <h3 className="text-text text-sm my-6">{description}</h3>
        <button className="text-black bg-gold px-8 py-4 rounded-2xl font-bold mb-4">{button}</button>
      </div>
    </div>
  );
};

export default BodyMenuItem;
