import { useForm } from "react-hook-form";
import Button from "./Button";

const Form = ({ setFormSubmitted, setEmail }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setFormSubmitted(true);
    setEmail(data.email);
  };

  return (
    <form className="mt-8 pb-10" onSubmit={handleSubmit(onSubmit)}>
      <p className="flex items-center justify-between">
        <label
          htmlFor="email"
          className="text-charcoal-grey text-[0.80rem] font-bold lg:text-[.9rem]"
        >
          Email adress
        </label>
        {errors.email && (
          <span className="text-tomato text-[0.80rem] font-bold lg:text-[.9rem]">
            {errors.email.message}
          </span>
        )}
      </p>

      <input
        type="text"
        id="email"
        placeholder="email@company.com"
        className={`w-full border-solid border-[1px] border-grey/50 rounded-lg py-3 px-4 mt-2 lg:py-[1rem] lg:px-6 focus:outline-none focus:border-charcoal-grey ${
          errors.email &&
          "border-tomato focus:border-tomato bg-tomato/20 text-tomato placeholder:text-tomato/50"
        }`}
        {...register("email", {
          required: "Email field is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Valid email required",
          },
        })}
      />
      <Button text="Subscribe to monthly newsletter" />
    </form>
  );
};

export default Form;
