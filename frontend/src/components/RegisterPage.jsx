import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginRegisterNav from "./LoginRegisterNav";
import axios from 'axios';


function RegisterPage() {
  const [username,setUsername] = useState("");  
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [password,setPassword] = useState("");
  function submitHandler(e){
      e.preventDefault()
      setEmail("");
      setPassword("");
      setUsername("");
      setPhone("");
      axios.post('http://localhost:8000/api/v1/user',{
      username,
      password,
      email,
      phone
  }
      ).then((res)=>{
        console.log(res)
      })
  }

  return (
    <>
      {" "}
      <LoginRegisterNav />
      <div className="text-white flex justify-center mt-20 mx-auto max-w-[900px] ">
        <div
          className="h-[450px] w-[500px] max-w-full border-[2px] border-none rounded-[7px] p-3"
          style={{ boxShadow: "5px 5px 25px 2px #F3A847" }}
        >
          <h2 className="text-[#F3A847] text-bold text-5xl pb-4">Sign Up</h2>
          <form className="flex flex-col text-black" onSubmit={submitHandler}>
            <input
              className="p-2 mb-3 rounded-[3px] w-[450px] max-w-full"
              type="text"
              placeholder="Username"
              value={username}
              required
              onChange={((e)=>{
                setUsername(e.target.value)
              })}
            ></input>
            <input
              className="p-2 mb-3 rounded-[3px] w-[450px] max-w-full"
              type="tel"
              placeholder="Phone No"
              value={phone}
              required
              onChange={((e)=>{
                setPhone(e.target.value)
              })}
            ></input>
            <input
              className="p-2 mb-3 rounded-[3px] w-[450px] max-w-full"
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={((e)=>{
                setEmail(e.target.value)
              })}
            ></input>
            <input
              className="p-2 mb-3 rounded-[3px] w-[450px] max-w-full"
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={((e)=>{
                setPassword(e.target.value)
              })}
            ></input>
            <button
              className="text-base bg-[#F3A847] p-2 mb-3 rounded-[3px] w-[450px] max-w-full"
              type="submit"
            >
              Sign Un
            </button>
          </form>
          <p>
            Don't have an Account?{" "}
            <Link className="text-[#F3A847]" to={"/"}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
