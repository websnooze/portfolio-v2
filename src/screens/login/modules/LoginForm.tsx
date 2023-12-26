import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {};

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Email</h3>
      <input type="email" {...register("email")} />
      <h3>Password</h3>
      <input type="password" {...register("password")} />
      <button type="submit">
        <span>Login</span>
      </button>
    </form>
  );
};

export default LoginForm;
