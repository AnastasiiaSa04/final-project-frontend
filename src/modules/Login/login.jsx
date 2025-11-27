import { useForm } from "react-hook-form";
import Button from "../../shared/components/Button/Button";
import TextField from "../../shared/components/TextField/TextField";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("LOGIN DATA:", data);
  };

  return (
    // <div style={{ width: 320, margin: "40px auto" }}>
    //   <h2 style={{ textAlign: "center", marginBottom: 20 }}>Log In</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="email"
          label="Email"
          register={register}
          rules={{ required: "Enter your email" }}
          error={errors.email}
        />

        <TextField
          name="password"
          type="password"
          label="Password"
          register={register}
          rules={{ required: "Enter password" }}
          error={errors.password}
        />

        <Button type="submit">Log In</Button>
      </form>
//     </div>
//   );
// };

export default Login;
