import SignSelectItem from "./SignSelectItem";

const SignSelectBoard = ({ signs, setPickedSign, selectedSignId }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mx-20 mt-10 lg:grid-cols-3">
      {signs.map((sign) => (
        <SignSelectItem sign={sign} setPickedSign={setPickedSign} selectedSignId={selectedSignId} />
      ))}
    </div>
  );
};

export default SignSelectBoard;
