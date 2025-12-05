import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Button from "../../shared/components/Button/Button";
import TextField from "../../shared/components/TextField/TextField";

const SignUpForm = ({ requestErrors, isSubmitSuccess, submitForm }) => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (requestErrors) {
      for (const key in requestErrors) {
        setError(key, {
          message: requestErrors[key],
        });
      }
    }
  }, [requestErrors, setError]);

  useEffect(() => {
    if (isSubmitSuccess) {
      reset();
    }
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
        label="Name"
      />
      <TextField
        name="fullname"
        placeholder="Full Name"
        register={register}
        rules={{ required: "Enter your full name" }}
        error={errors.fullname}
      />
      <TextField
        name="username"
        placeholder="Username"
        register={register}
        rules={{ required: "Enter a username" }}
        error={errors.username}
      />
      <TextField
        name="password"
        type="password"
        placeholder="Password"
        register={register}
        autoComplete="current-password"
        rules={{ required: "Password required" }}
        error={errors.password}
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
