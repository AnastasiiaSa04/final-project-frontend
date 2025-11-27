import { useForm } from "react-hook-form";
import Button from "../../shared/components/Button/Button";
import TextField from "../../shared/components/TextField/TextField"

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("SIGN UP DATA:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="email"
        placeholder="Email"
        register={register}
        rules={{ required: "Enter your email" }}
        error={errors.email}
      />
      <TextField
        name="fullname"
        type="fullnamename"
        placeholder="Full Name"
        register={register}
        rules={{ required: "Enter yor Full name" }}
        // error={errors.password}
      />
            <TextField
        name="username"
        placeholder="Username"
        register={register}
        rules={{ required: "Add your username" }}
        // error={errors.email}
      />
            <TextField
        name="password"
        placeholder="Password"
        register={register}
        rules={{ required: "Create a password" }}
        error={errors.password}
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
