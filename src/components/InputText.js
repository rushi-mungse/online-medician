
const InputText = ({ ...props }) => {
  return (
    <div className=" flex align-center justify-center ">
      <input className="text-dark-500 w-2/5 mb-4 py-2 px-4 text-sm border-2 border-yellow-100 bg-yellow-400 outline-none rounded-xl hover:bg-yellow-100" type="text" {...props} />
    </div>
  );
};

export default InputText;