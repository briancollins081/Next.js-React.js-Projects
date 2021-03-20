import { useState } from "react";
import { signIn } from "next-auth/client";
import classes from "./auth-form.module.css";

const createUser = async ({ email, password }) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
};

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formState, setFormState] = useState({ email: "", password: "" });

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: formState.email,
        password: formState.password,
      });
      console.log(result);
    } else {
      try {
        const result = await createUser(formState);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            value={formState.email}
            onChange={({ target: { value: email } }) =>
              setFormState({ ...formState, email })
            }
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            value={formState.password}
            onChange={({ target: { value: password } }) =>
              setFormState({ ...formState, password })
            }
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
