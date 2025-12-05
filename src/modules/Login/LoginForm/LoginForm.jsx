import { useForm } from "react-hook-form";

const LoginForm = ({ submitForm, requestErrors }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    submitForm(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Username or Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        {requestErrors?.email && (
          <p style={{ color: "red" }}>{requestErrors.email}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        {requestErrors?.password && (
          <p style={{ color: "red" }}>{requestErrors.password}</p>
        )}
      </div>

      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
