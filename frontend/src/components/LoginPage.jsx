import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginRegisterNav from "./LoginRegisterNav";
import axios from "axios";
import { userName } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
 
  function submitHandler(e) {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:8000/api/v1/login", {
        email,
        password,
      })
      .then((res) => {

        if (res.data.message === "Success") {
          // console.log(res.data.name)
          dispatch(userName(res.data.name))
         navigate("/home");
        }
      });
     
  }
 
  return (
    <>
     <LoginRegisterNav />
      <div className="text-white flex justify-center mt-20 mx-auto max-w-[900px] ">
        <div
          className="h-[300px] w-[500px] max-w-full border-[2px] border-none rounded-[7px] p-3"
          style={{ boxShadow: "5px 5px 25px 2px #F3A847" }}
        >
          <h2 className="text-[#F3A847] text-bold text-5xl pb-4">Sign In</h2>
          <form className="flex flex-col text-black" onSubmit={submitHandler}>
            <input
              className="p-2 mb-3 rounded-[3px] w-[450px] max-w-full"
              type="email"
              placeholder="Email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              className="p-2 mb-3 rounded-[3px] w-[450px] max-w-full"
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <button
              className="text-base bg-[#F3A847] p-2 mb-3 rounded-[3px] w-[450px] max-w-full"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <p>
            Don't have an Account?{" "}
            <Link className="text-[#F3A847]" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
