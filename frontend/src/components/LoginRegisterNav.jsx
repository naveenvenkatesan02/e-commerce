import React from "react";
import logo from "./Assets/logo.png";

function LoginRegisterNav() {
  return (
    <div className="flex flex-col items-center mx-auto max-w-[900px]">
      <div className="text-white font-logo text-4xl">
        <h1>KPBUY.in</h1>
      </div>
      <div>
        <img src={logo} alt="logo" width={70}></img>
      </div>
    </div>
  );
}

export default LoginRegisterNav;
