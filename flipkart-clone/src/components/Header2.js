import React, { useState } from "react";
import { NavLink, BrowserRouter as Router, } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Header2(props) {

  console.log('props.userStatus in header : '+props.userStatus)
  let navigate = useNavigate();
  const [hambergur, setHambergur] = useState({
    icon: "hamburger",
    sidebar: "hidden",
  });

  const hambergurClicked = () => {
    console.log("hambergur");
    if (hambergur.icon === "hamburger") {
      setHambergur({ icon: "close", sidebar: "duration-600 block ease-in" });
    } else {
      setHambergur({
        icon: "hamburger",
        sidebar: "duration-600 hidden ease-in",
      });
    }
  };

  const handleMouseEnter = (e) => {
    if (e.target.id === "lg") {
      document.getElementById("login").style.display = "block";
      document.getElementById("lg-arrow").style.transform = "rotate(180deg)";
    } else if (e.target.id === "mo") {
      document.getElementById("mo-arrow").style.transform = "rotate(180deg)";
      document.getElementById("more").style.display = "block";
    }
  };

  const handleMouseLeave = (e) => {
    document.getElementById("login").style.display = "none";
    document.getElementById("more").style.display = "none";
    document.getElementById("lg-arrow").style.transform = "rotate(0deg)";
    document.getElementById("mo-arrow").style.transform = "rotate(0deg)";
  };

  const handleLogout =()=>{
    console.log("logout fire : ");
    localStorage.removeItem("authToken");
    props.setUserStatus(false);
    navigate("/signin",{replace:true})
  }

  return (
    <div>
      <nav className="w-[1023px] lg:w-full overflow-hidden  p-1 bg-[#2874f0]  flex justify-end ">
        <ul className="list-none  text-white font-medium p-2 w-[100%]  justify-end  mx-auto flex lg:justify-center items-center border-black">
          <li className=" px-3 w-32  md:w-28">
            <img
              src={require("./Images/head0.png")}
              className="w-full"
              alt=""
            />
            <span className="text-[10px] md:text-xs md:w-24 flex justify-between">
              Explore Plus
              <img
                src={require("./Images/head01.png")}
                className="md:w-4 w-3"
                alt=""
              />
            </span>
          </li>

          <li className="border-2 px-3 py-1 ml-3 mr-3 md:mr-5  bg-white w-96 md:w-[450px]">
            <input
              type="text"
              className="w-[92%] px-3 py-1 outline-none font-normal text-slate-500"
              placeholder="Search for products,brands and more"
              name="product"
              id=""
            />
          </li>

          <li
            className={`lg:hidden hover:bg-blue-600 hover:cursor-pointer p-2 ${
              hambergur.icon === "close" ? "hidden" : "block"
            }`}
            onClick={hambergurClicked}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </li>

          <li
            className={`lg:hidden hover:bg-blue-600 hover:cursor-pointer p-2 ${
              hambergur.icon === "close" ? "block" : "hidden"
            }`}
            onClick={hambergurClicked}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </li>

          { props.userStatus=== false ? (
            <li
              id="lg"
              className="px-10 py-2 hidden lg:block  hover:cursor-pointer text-[#2874f0] rounded-sm ml-4  md:ml-10 bg-white"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink className={`flex space-x-1`} to="/signin">
                <p>Login</p>
                <span className="mt-1 rotate-0" id="lg-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </NavLink>

              <ul
                id="login"
                className="absolute hidden top-[54px] -ml-20 pt-4  text-sm text-white bg-[#2874f0] shadow-lg z-10"
              >
                <li className="hover:text-black flex hover:bg-white justify-between px-4 py-5 font-bold">
                  <p>New Customer?</p>
                  <p>
                    <NavLink to="/createAccount" className="hover:text-[#2874f0]" >
                      Sign Up
                    </NavLink>
                  </p>
                </li>

                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4 ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <NavLink className={"hover:text-blue-600"} to='/signin'>My profile</NavLink>
                </li>

                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4 ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <NavLink to="/">Flipkat Plus Zone</NavLink>
                </li>

                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4 ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <NavLink to="/">Orders</NavLink>
                </li>

                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                  </span>
                  <NavLink to="/">Wishlist</NavLink>
                </li>
                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <NavLink to="/">Rewards</NavLink>
                </li>

                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4 mb-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  </span>
                  <NavLink to="/">Gift Cards</NavLink>
                </li>
              </ul>
            </li>
          ) : (
            <li
              id="lg"
              className="px-2 py-2 hidden lg:block  hover:cursor-pointer text-white rounded-sm ml-4  md:ml-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex space-x-1">
                <p>{props.userProfile?props.userProfile.fname : "User"}</p>
                <span className="mt-1 rotate-0" id="lg-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <ul
                id="login"
                className="absolute hidden top-[54px] -ml-20 pt-4  text-sm text-white bg-[#2874f0] shadow-lg z-10"
              >
                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4 ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <NavLink to="/profile">My profile</NavLink>
                </li>
                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4 ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                  </span>
                  <NavLink to="/">SuperCoin Zone</NavLink>
                </li>
                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4 ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <NavLink to="/">Flipkat Plus Zone</NavLink>
                </li>

                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4 ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <NavLink to="/">Orders</NavLink>
                </li>

                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                  </span>
                  <NavLink to="/">Wishlist</NavLink>
                </li>
                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </span>
                  <NavLink to="/">My Charts</NavLink>
                </li>
                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <NavLink to="/"> Coupons</NavLink>
                </li>

                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4 mb-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  </span>
                  <NavLink to="/">Gift Cards</NavLink>
                </li>
                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4 mb-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  </span>
                  <NavLink to="/">Notifications</NavLink>
                </li>
                <li className="hover:text-black flex hover:bg-white space-x-2 pl-6 pr-20 py-4 mb-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </span>
                  <button className="hover:cursor-pointer" onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </li>
          )}

          <li className="py-1 ml-6 hidden lg:block w-40 lg:w-36">
            <NavLink to="/">Become a Seller</NavLink>
          </li>

          <li
            className="py-1 px-4 hidden lg:block hover:cursor-pointer"
            id="mo"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink className="flex space-x-1" to="/">
              <p>More</p>
              <span className="mt-1" id="mo-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </NavLink>

            <ul
              id="more"
              className="absolute hidden top-[50px] -ml-16 pt-4  text-sm text-white bg-[#2874f0] shadow-lg z-10"
            >
              <li className="hover:text-black flex space-x-2 hover:bg-white px-5 py-4 ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </span>
                <NavLink to="/">Notification Preference</NavLink>
              </li>

              <li className="hover:text-black flex space-x-2 hover:bg-white px-5 py-4 ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <NavLink to="/">24X7 Customer Care</NavLink>
              </li>

              <li className="hover:text-black flex space-x-2 hover:bg-white px-5 py-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <NavLink to="/">Advertise</NavLink>
              </li>

              <li className="hover:text-black flex space-x-2 hover:bg-white px-5 py-4 mb-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </span>
                <NavLink to="/">Download App</NavLink>
              </li>
            </ul>
          </li>

          <li className="py-1 ml-10 hidden lg:block">
            <NavLink className="flex space-x-1" to="/viewCart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              <p className="bg-blue">Cart</p>
            </NavLink>
          </li>
        </ul>

        <div
          className={`sidebar absolute lg:hidden left-[815px] top-16 my-1 h-auto pb-1  bg-[#2874f0] w-52 ${hambergur.sidebar} text-center z-10`}
        >
          <ul className=" p-x-4  font-medium text-white z-20">
            <li className="block px-5 pb-3 pt-5 hover:bg-white hover:text-black">
              <NavLink to="/">Become a Seller</NavLink>
            </li>
            <li className="block px-5 py-3 hover:bg-white hover:text-black">
              More
            </li>
            <li className="block px-5 py-3 hover:bg-white hover:text-black">
              <NavLink to="/viewCart">Carts</NavLink>
            </li>
            <li className="block px-5 py-3 hover:bg-white hover:text-black ">
              <NavLink to="/signin">Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
