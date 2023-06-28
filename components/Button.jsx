const Button = ({ text, classes }) => {
  return (
    <button
      type="submit"
      className={`bg-dark-slate-grey text-white w-full mt-6 rounded-lg py-4 text-base font-bold hover:bg-gradient-to-tr hover:from-redpink hover:to-orange hover:shadow-lg hover:shadow-buttonHover ${classes}`}
    >
      {text}
    </button>
  );
};

export default Button;
