import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Button from "../../shared/components/Button/Button";
import TextField from "../../shared/components/TextField/TextField";

const SignUpForm = ({
  requestErrors,
  isSubmitSuccess,
  submitForm,
  onChangeField,
}) => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  // Устанавливаем ошибки для полей (если нужно)
  useEffect(() => {
    if (requestErrors && requestErrors.length > 0) {
      requestErrors.forEach((message, index) => {
        setError(`field${index}`, { message });
      });
    }
  }, [requestErrors, setError]);

  useEffect(() => {
    if (isSubmitSuccess) reset();
  }, [isSubmitSuccess, reset]);

  const onSubmit = (values) => {
    submitForm(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="email"
        placeholder="Email"
        register={register}
        rules={{ required: "Email required" }}
        error={errors.email}
        label="Email"
        autoComplete="email"
        onChange={onChangeField}
      />
      <TextField
        name="fullname"
        placeholder="Full Name"
        register={register}
        rules={{ required: "Enter your full name" }}
        error={errors.fullname}
        autoComplete="name"
        onChange={onChangeField}
      />
      <TextField
        name="username"
        placeholder="Username"
        register={register}
        rules={{ required: "Enter a username" }}
        error={errors.username}
        autoComplete="username"
        onChange={onChangeField}
      />
      <TextField
        name="password"
        type="password"
        placeholder="Password"
        register={register}
        rules={{ required: "Password required" }}
        error={errors.password}
        autoComplete="current-password"
        onChange={onChangeField}
      />
      <Button type="submit">Sign Up</Button>

      {/* Ошибки с сервера (только строки!) */}
      {requestErrors && requestErrors.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          {requestErrors.map((err, idx) => (
            <p key={idx} style={{ color: "red" }}>
              {err}
            </p>
          ))}
        </div>
      )}
    </form>
  );
};

export default SignUpForm;
