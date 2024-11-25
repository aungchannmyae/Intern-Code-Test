import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      // console.log('proceed');
      fetch(import.meta.env.VITE_API_URL + "/user/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          //console.log(resp)
          if (Object.keys(resp).length === 0) {
            toast.error("Please Enter valid username");
          } else {
            if (resp.password === password) {
              toast.success("Success");
              sessionStorage.setItem("username", username);
              sessionStorage.setItem("userRole", resp.role);
              navigation(`/user`);
            } else {
              toast.error("Please Enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={ProceedLogin}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username ( not your full name)
        </label>
        {/* <input
          type="email"
          //   {...register("email")}
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
        /> */}
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        {/* <input
          type="password"
          //   {...register("password")}
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        /> */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="remember"
              className="text-gray-500 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        // disabled={isSubmitting}

        className="w-full text-white flex disabled:pointer-events-none disabled:opacity-80 justify-center items-center gap-3 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Log in
        {/* {isSubmitting && <ButtonSpinner />} */}
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <Link
          to="/register"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
