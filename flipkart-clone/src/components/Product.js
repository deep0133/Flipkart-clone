import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product() {

  let navigate = useNavigate();

  const handleMouseEnter = (e) => {
    const arrow = e.target.id + "-arrow";
    console.log(arrow);
    document.getElementById(arrow).style.transform = "rotate(180deg)";
  };

  const handleMouseLeave = (e) => {
    const arrow = e.target.id + "-arrow";
    document.getElementById(arrow).style.transform = "rotate(0deg)";
  };

  const handleBuyProduct = ()=>{
    navigate("/buyproduct",{replace:true})
  }

  return (
    <div className="bg-[#f3f3f3] w-[1023px] lg:w-full">
      <div className="head bg-white shadow-sm">
        <ul className=" text-black space-x-3 flex mx-auto w-fit text-sm font-medium">
          <li
            id="elec"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="flex py-4 px-2 hover:cursor-pointer hover:text-blue-500"
          >
            <a href="#"> Electronics</a>
            <span id="elec-arrow" className="ml-1 rotate-0">
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
          </li>
          <li
            id="tv"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="flex py-4 px-2 hover:text-blue-500"
          >
            <a href="#"> TVs & Appliances</a>
            <span id="tv-arrow" className="ml-1 rotate-0">
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
          </li>
          <li
            id="men"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="flex py-4 px-2 hover:text-blue-500"
          >
            <a href="#"> Men</a>
            <span id="men-arrow" className="ml-1 rotate-0">
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
          </li>
          <li
            id="women"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="flex py-4 px-2 hover:text-blue-500"
          >
            <a href="#"> Women</a>
            <span id="women-arrow" className="ml-1 rotate-0">
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
          </li>
          <li
            id="body"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="flex py-4 px-2 hover:text-blue-500"
          >
            <a href="#"> Baby & Kids</a>
            <span id="body-arrow" className="ml-1 rotate-0">
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
          </li>
          <li
            id="home"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="flex py-4 px-2 hover:text-blue-500"
          >
            <a href="#"> Home & Furniture</a>
            <span id="home-arrow" className="ml-1 rotate-0">
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
          </li>
          <li
            id="sport"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="flex py-4 px-2 hover:text-blue-500"
          >
            <a href="#"> Sports, Books & More</a>
            <span id="sport-arrow" className="ml-1 rotate-0">
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
          </li>
          <li className="flex py-4 px-2 hover:text-blue-500">
            <a href="#"> Flights</a>
          </li>
          <li className="flex py-4 px-2 hover:text-blue-500">
            <a href="#"> Offer Zone</a>
          </li>
        </ul>
      </div>
      <div className="content px-2 py-4">
        <h1 className="font-medium mb-3">Laptops & Desktops</h1>
        <p className="text-xs text-gray-500">
          If you are an entrepreneur and looking for laptops to set up your
          workplace, then you can buy these mini-computers online. Whether you
          are looking for best-selling computers, gaming computers or any other
          types, you can choose as per your requirements. These technologies are
          equipped with smart and user-friendly features as they cater to your
          professional and entertainment needs. Being light in weight, they are
          portable, even while travelling. These desktops help you achieve your
          goals, and the sleek design and stylish look are sure to grab
          everyone's attention. These mini-computers come with a large storage
          capacity with efficient RAM and enable you to store a large amount of
          data. They are not just laptops, but are your entertainment hub,
          social network and workplace. There is a wide range of desktops
          available online to choose from, depending on your needs. Each comes
          with its own unique set of features and benefits. You can also check
          and compare the laptop prices and features online and pick the one
          that suits your preferences. Various brands are available online such
          as Lenovo, Dell, Electrobot, HP, Acer, and more. So, hurry up, add
          them to your shopping cart, pay through a secure gateway, and have
          them delivered to your doorstep. Choose among:
          <span className="text-blue-500">
            
            Entertainment Laptops | Gaming Laptops | Everyday use laptops
          </span>
        </p>
      </div>
      <div className="theme w-full p-2">
        <img src={require("./Images/products/product-theme.webp")} alt="" />
      </div>

      {/*  Row-1 ::  Recent View:  START*/}
      <div className="body-slider-3 mx-2 border-b-2">
        <div className="grid grid-cols-1 gap-5">
          {/* First Column   ::   Left Part */}
          <div className="card-head flex-shrink-0 bg-white">
            {/* Title of Deal */}
            <div className="heading flex justify-between px-2 py-3 text-black bg-white border-b-2">
              <p className="font-medium px-5 text-2xl">
                Design Content & Laptops
              </p>
              <button className="bg-blue-600 px-4 font-medium py-2 rounded-sm text-white">
                <a href="#">View All</a>
              </button>
            </div>

            {/* Content of Deal   ::   card  */}
            <div className="slides flex flex-1 w-full pb-3 space-x-8 overflow-auto">
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center  bg-white ">
                <div className="h-48 flex items-center justify-center">
                  <img src={require("./Images/products/l1.webp")} alt="" />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l2.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l3.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l4.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l5.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l6.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l1.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l2.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l3.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l4.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l5.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Row-1 ::  Recent View:  END*/}

      {/*  Row-2 ::  Recent View:  START*/}
      <div className="body-slider-3 mx-2 mb-10">
        <div className="grid grid-cols-1 gap-5">
          {/* First Column   ::   Left Part */}
          <div  className="card flex-shrink-0 bg-white">
            {/* Title of Deal */}
            <div className="heading flex justify-between px-2 py-3 text-black bg-white border-b-2">
              <p className="font-medium px-5 text-2xl">Gaming Laptops</p>
              <button className="bg-blue-600 px-4 font-medium py-2 rounded-sm text-white">
                <a href="#">View All</a>
              </button>
            </div>

            {/* Content of Deal   ::   card  */}
            <div className="slides flex flex-1 w-full pb-3 space-x-8 overflow-auto">
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center  bg-white ">
                <div className="h-48 flex items-center justify-center">
                  <img src={require("./Images/products/l1.webp")} alt="" />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l2.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l3.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l4.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l5.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l6.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l1.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l2.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l3.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l4.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
              <div onClick={handleBuyProduct} className="card hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transition-[2s] scale-75 flex-shrink-0  w-48 justify-center bg-white ">
                <div className="flex items-center justify-center h-48">
                  <img
                    src={require("./Images/products/l5.webp")}
                    alt=""
                    className=""
                  />
                </div>
                <div className="content text-sm text-center py-2">
                  <h3 className=" font-medium">Rakhi Sets</h3>
                  <p className="text-green-600">Upto 80% Off</p>
                  <span className="text-slate-400">Grab or Gone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Row-2 ::  Recent View:  END*/}

      <div className="footer border-t-[1px] p-4 mt-5 border-black bg-white">
        <h1 className="text-sm">
          Buy laptops online at the best prices in India
        </h1>
        <p className="text-xs">
          Laptops, since the time of their advent, have managed to set a trend
          that completely altered the way people work with computers. The main
          reason behind this is the portability factor that leads to instant
          access to information. With time, many variants of laptops came into
          being, like the notebook, ultrabook, netbook, 2 in one Laptops and
          more. Choosing the best laptop online that satisfies your requirements
          as a user is very important. The best laptop brands including Dell
          Laptops, HP laptops, Lenovo laptops, Acer laptops, Apple MacBooks,
          Asus Laptops and more, always assure you of quality service and can be
          blindly relied upon. Be it setting up a workspace at home, attending
          online lectures, or being a professional gamer; laptops make
          everything easier. These gadgets offer the advantage of portability,
          longer battery life, and convenient size. You can buy a device
          depending on your needs; a sleek one, a foldable one, a touch-screen
          device, or a very small size. These gadgets are available with various
          operating systems, such as Windows, Mac, Linux, Chrome OS, etc., each
          varying in the features they offer. Watching movies, online shopping,
          browsing the internet, using social networking platforms, the list of
          uses for leisure is endless. Apart from this, they can be used for
          making family budgets and records, saving important documents, etc. It
          enables you to do a whole lot of things, and that too with greater
          ease. They can also be differentiated on the basis of who is using
          them, i.e., there are student-specific models, models designed for
          office work, gaming purposes, and general home use. You can easily buy
          laptops online, with the convenience of sitting at your home. Various
          brands like Dell, Lenovo, Asus, HP, and Acer offer various models with
          varied features. Choose the most suitable model for yourself, and
          place your order today. Whether you are a college student or an
          entrepreneur, you need a laptop to conduct your work. The
          mini-computers offer the perfect solution for you. Selecting the right
          system is important, and you need to know your requirements first
          before picking the right one. There are various brands available
          online, such as Lenovo, DELL, HP, Apple, Redmi, LG, Nokia, etc. These
          top brands offer not only modern computers but also exhibit excellent
          performance. It allows you to do routine tasks as well as enjoy
          gaming. These PCs come with a large storage capacity with efficient
          RAM that enables you to store a large amount of data and operate well.
          The processor speed guarantees you that the productivity is at an
          optimal level. So, hurry up and get your favourite computer delivered
          to your doorstep by placing your order online. You can check and
          compare laptop prices and features online and pick the right one for
          you. Fulfil your task at the workplace or home; palmtops can be
          distinguished based on their size, portability, processor speed, RAM
          capacity, and affordability. Make a style statement and choose from an
          unending range of high-performance PCs. Invest in modern technology by
          placing your order for the laptop from your home.
        </p>
        <h1 className="text-sm">Laptops are Essential Daily Use Devices</h1>
        <p className="text-xs">
          Laptops are an important asset found in most of the households. It is
          practically impossible to think of working without a proper
          functioning laptop, unless there’s a desktop or a mini computer. The
          usage of laptops have reached a wide angle ranging from education at
          schools and colleges, for work purposes such as businesses, banks,
          offices, shops or other network centers, web browsing, playing games,
          multimedia and also for personal, home usage and more. One can perform
          simple to complex tasks on a laptop and get their work done at ease.
          The difference between a laptop and a computer is that the former is a
          portable device than the latter and has a built-in battery and
          keyboard that doesnt require re-assembling upon travel. Laptops work
          in the manner of notebooks where you open and close as and when
          required. There are a myriad of laptop models, variants, processors,
          operating systems available online. Many trusted brands such as
          Lenovo, HP, DELL, acer, ASUS, and more sell amazing laptops online
          that have a host of amazing features, processors, OS, and a plenty of
          other customizable options.
        </p>
        <h1 className="text-sm">The Various Usabilities of a Laptop</h1>
        <p className="text-xs">
          The kind of technology that laptop encompasses has made people’s life
          simpler and entertaining. This electronic device fulfills all your
          personal and home needs and can be distinguished based on the size,
          processor, portability, memory, RAM, interface, performance, and a lot
          of other features. The portable computer device can perform unlimited
          activities in a short span of time with maximum efficiency. Many
          laptop variants offer high-end HD viewing experience with amazing
          graphics, clear audio and a host of other add on attributes. Choose
          from a range of variants such as notebooks, Ultrabooks, Thinkpad,
          Convertibles, touch screens, etc., sold by various brands online. The
          rechargeable battery makes it convenient for you to take it along
          anywhere and charge when the battery drains out. With technology
          advancing everyday, laptops are only improving day after day. A lot of
          sectors make use of laptop in their day to day life such as banking
          sectors, educational institutions, hospitals, governments,
          corporations, offices, and all other industries. Without a computer,
          it is quite difficult to carry out essential computing or data
          processing tasks.
        </p>
        <h1 className="text-sm">Order the Best Laptop Online</h1>
        <p className="text-xs">
          You can order your favourite brand laptop model online at Flipkart. Do
          check the various features and attributes offered by each laptop
          variant. Read the description or the product details thoroughly before
          placing your order so as to ensure you get the ideal one you are
          looking for that has all the essential features. You can check the
          performance and other possibilities of the device by reading reviews
          and comments posted by various buyers. This helps you in making an
          informed buying decision. Since laptop is a huge investment, make a
          mindful choice and compare the features and prices with various brands
          so as to grab the best deal. Sit comfortably with your notepad on your
          lap and start doing your work with great pride.
        </p>

        <div className="questions text-xs my-16">
          <h1 className="text-sm font-semibold">Question and Answers</h1>
          <hr className="my-2"  />

          <p>Q.Which is the best laptop to buy under Rs 50,000?</p>
          <p>
            A.While buying a laptop online, you must consider what application
            you want to use it for. Do you want to buy a laptop for your
            business needs, everyday activities or gaming? Once you decide this,
            you can zero in on the specifications and features. Under Rs 50,000
            there is a wide range of laptop from top brands that you can choose
            from. Some of the good models are HP Imprint Core i3 6th Gen laptop,
            Acer Aspire 3 Celeron Dual Core laptop, Dell Inspiron Core i3 6th
            Gen and many more options can be found under 50,000.
        <hr className="my-2" />  </p>
          
          <p> Q.Which laptop is best for gaming?</p>
          <p>
            A.These are some of the factors you should look into while buying a
            gaming laptop: GPU (Graphics Processing Unit)- choose from AMD
            Radeon and NVIDIA GeForce and the like, the CPU for assuring smooth
            performance- choose from Intel, AMD and the like, RAM – the amount
            of RAM is important for smooth gaming. Go for laptops like Acer
            Predator Helios 300 Core i7 7th Gen, MSI CX Core i7 7th Gen, Lenovo
            Legion Core i7 7th Gen among others.
        <hr className="my-2" />  </p>
        
          <p>Q.Name some brands that offer laptops online?</p>
          <p>
            A.Laptops are available online from brands like HP, DELL, Lenovo,
            Acer, Apple, etc.
          </p>
        <hr className="my-2" />  <p>
            Q.What is the difference between an engineering laptop and one for
            art students?
          </p>
          <p>
            A.Engineering students need to install and use a number of technical
            software like CAD, AutoCAD, ANSYS, Solidworks, MATLAB and the like
            for various designing and project related work. Hence, a lot of disk
            space and smooth and fast operation are necessary. Hence, choosing a
            laptop with high-speed CPU, large RAM, large hard-disk drive memory
            are essential. Good options are HP 15 Core i5 6th Gen Notebook,
            Lenovo core i5 7th Gen Notebook, Dell Inspiron 7000 core Notebook,
            Apple MacBook Air Core i5 5th Gen laptop and more. Arts students
            install and use a lot of designing software like Photoshop,
            Indesign, Lightroom and the like for their design and editing work.
            You can opt for an i3 core processor laptop like HP Pentium
            quad-core notebook, Dell Inspiron Core i3 6th Gen Notebook, Lenovo
            Core i3 6th Gen Ideapad Notebook among others.
          </p>
        <hr className="my-2" />  <p>
            Q.What are the factors to be considered before buying a laptop?
          </p>
          <p>
            
            A.Based on what application your laptop is to be used for, you can
            buy one with an appropriate RAM, processor, storage type and so on:
            i) Processor: If you are buying a laptop only for your everyday
            activities and do not plan to install a lot of software that might
            take up a huge space inside, then you can go for 13 or 15 processors
            from Intel. On the other hand, if you are into gaming and also want
            to install many spaces consuming software, then go to i7. AMD and
            ARM are also other good processor brands. ii) RAM: If you are buying
            a MacBook where it is not possible to expand the RAM post buying,
            then buy one with maximum RAM. Otherwise, a laptop from Lenovo, HP,
            Dell, Asus etc., with 16GB RAM should serve the purpose. The RAM can
            always be expanded in future. iii) Storage type: If your
            applications are not very heavy on the software side, you can go for
            an HDD type storage. Otherwise, it is best to go for SSD type
            storage. SSDs make everything significantly faster. It speeds up the
            computer a lot.
          </p>
       <hr className="my-2" />   <p>
            Q.What are some of the key considerations before buying a laptop?
          </p>
          <p>
            A.You have to assess your needs, i.e. whether you will be using it
            only for a few hours, throughout the day, or while travelling. The
            features of a regular laptop will vary from the features of a laptop
            for gaming.
          </p>
        <hr className="my-2" />  <p> Q.Which type of laptop is best suited to students?</p>
          <p>
            A.You can choose from a high-end machine like the Microsoft Surface
            Laptop 4, Acer Swift 3, Google Pixelbook Go, and Dell XPS 17. It all
            depends on the usage.
          </p>
       <hr className="my-2" />
          <p>
            Q.What should be the ideal screen size of a laptop for students?
          </p>
          <p>
            A.A convenient size would have a display screen between 33.02 cm
            (13) and 35.56 cm (14). These are easy to carry between
            school/college and home.
          </p>
          <hr className="my-2" />
          <p> Q.What is the price of a laptop that offers 4K resolutions?</p>
          <p>
            A.This depends entirely on the brand, but the laptop price is likely
            on the higher side.
          </p>
         <hr className="my-2" />
          <p>
            Q.Is a solid state drive (SSD) better than a hard disk drive (HDD)?
          </p>
          <p>
            
            A.SSDs offer very high speed and are preferred over HDDs. You can
            discover more of these features online.
          </p>
    
        </div>
      </div>
    </div>
  );
}
