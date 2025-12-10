import { useForm } from "react-hook-form";

const LoginForm = ({ submitForm, requestErrors }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  useEffect(() => {
    if (requestErrors) {
      for (const key in requestErrors) {
        const message =
          typeof requestErrors[key] === "string"
            ? requestErrors[key]
            : Object.values(requestErrors[key]).join(", ");
        setError(key, { message });
      }
    }
  }, [requestErrors, setError]);

  const onSubmit = (values) => {
    submitForm(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Username or Email"
          autoComplete="email"
          onChange={onChangeField}
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          onChange={onChangeField}
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>

      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
