import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Please enter your full name."),
    email: yup.string().email().required("Please enter a valid email address."),
    age: yup.number().positive().integer().min(18).required("Please enter a vald age."),
    password: yup.string().min(4).max(20).required("Invalid password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required("Password does not match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 p-10"
    >
      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Full name"
          className="border py-2 px-3 rounded-lg "
          {...register("fullName")}
        />
        <p className="text-red-500">{errors.fullName?.message}</p>
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Email"
          {...register("email")}
          className="border py-2 px-3 rounded-lg"
        />
        <p className="text-red-500">{errors.email?.message}</p>
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="number"
          placeholder="Age"
          {...register("age")}
          className="border py-2 px-3 rounded-lg"
        />
        <p className="text-red-500">{errors.age?.message}</p>
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="border py-2 px-3 rounded-lg"
        />
        <p className="text-red-500">{errors.password?.message}</p>
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword")}
          className="border py-2 px-3 rounded-lg"
        />
        <p className="text-red-500">{errors.confirmPassword?.message}</p>
      </div>
      <input
        type="submit"
        className="py-2 px-3 bg-blue-200 rounded-lg hover:bg-blue-600 active:bg-blue-900 transition-colors cursor-pointer"
      />
    </form>
  );
};

export default Form;
