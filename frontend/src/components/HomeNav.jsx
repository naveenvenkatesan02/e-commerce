import React, { useState } from "react";
import logo from "./Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
function HomeNav() {
 const user = useSelector(state=> state.users.value)
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  function handleProfile() {
    navigate("/");
  }
  function handleLogout() {
    navigate("/logout");
  }
  function handleMenu() {
    setMenu(!menu);
  }
  

  return (
    <div className="flex mx-auto max-w-[1024px] items-center p-2 ">
      <Link to={"/"}>
        <div className="text-white font-logo text-4xl flex flex-col">
          <h1>KPBUY.in</h1>
          <img src={logo} alt="logo" width={70}></img>
        </div>
      </Link>
      <div className="flex ml-[170px] rounded-[px]">
        <input className="p-1 w-[250px]" type="text" placeholder=""></input>
        <Link>
          <IoIosSearch className="text-white bg-[#F3A847] h-[32px] w-[30px]" />
        </Link>
      </div>
      <div className="flex max-w-full pl-[100px] items-center ml-[110px]">
        <Link>
          <button className="flex text-white items-center">
            <IoCartOutline className="text-white text-[40px]" />
            <h3 className="pr-1">Cart</h3>
            <p className="text-[15px] text-black bg-[#F3A847] h-[20px] w-[20px] rounded-full inline-block">
              1
            </p>
          </button>
        </Link>
        <div className=" pl-7 ">
          <div className="text-white flex cursor-pointer" onClick={handleMenu}>
            <h1 className="text-xl">Hello!</h1>
            <h1 className="text-xl pl-1 text-[#F3A847]">{user}</h1>
          </div>
          {menu && (
            <div className="text-white text-lg w-[120px] pt-2 absolute">
              <h3
                className="border-1 rounded-[5px] border-[#F3A847] p-1 text-center cursor-pointer hover:bg-[#F3A847]"
                onClick={handleProfile}
              >
                Profile
              </h3>
              <h3
                className="border-1 rounded-[5px] border-[#F3A847] p-1 text-center cursor-pointer hover:bg-[#F3A847]"
                onClick={handleLogout}
              >
                Logout
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
