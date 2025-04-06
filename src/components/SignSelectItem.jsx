const SignSelectItem = ({ sign, setPickedSign, selectedSignId }) => {
  let style =
    "h-full bg-container-box flex flex-col justify-center items-center rounded-xl p-4";
  if (selectedSignId === sign.id) {
    style += " border border-gold";
  }
  return (
    <div>
      {sign !== null && (
        <button
          onClick={() => setPickedSign(sign.id)}
          className={style}
        >
          <img src={`../../public/${sign.image}`} width={150} />
          <h1 className="text-gold font-bold text-sm text-center">
            {sign.name}
          </h1>
        </button>
      )}
    </div>
  );
};

export default SignSelectItem;
