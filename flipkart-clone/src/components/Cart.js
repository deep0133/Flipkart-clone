import React, { useState } from "react";

export default function Cart(props) {
  // const [user, setUser] = useState({ status: false });

  return (
    <div className="w-[1023px] lg:w-screen  bg-[#f3f3f3]">
      {!props.userStatus
        ? (<div className="w-[85%] mx-auto grid  grid-cols-1 justify-center items-center py-8">
        
        <div className="row-1 bg-white flipkart-grocery grid grid-cols-2 mb-3 py-3 relative">
          <div className="flipkart  text-center py-1 hover:cursor-pointer  ">
            Flipkart(3)
          </div>
            {/* <span className="bg-blue-600 h-[3px] rounded-full w-48 lg:w-52 bottom-0 left-[135px] md:left-36 lg:left-48 absolute"></span> */}
          <div className="grocery text-center py-1">Grocery</div>
        </div>
        <div className="row-2 my-3 bg-white ">
          <div className="img w-60 mx-auto mt-5 pt-5">
            <img src={require("./Images/cartEmpty.webp")} alt="" />
          </div>
            <div className="content text-center mt-5 mb-10">
              <h1> Missing Cart items?</h1>
              <p className="text-xs mt-2 mb-6">Login to see the items you added previously</p>
              <button className="py-2 px-16 text-white bg-orange-400 hover:bg-orange-500 rounded-sm"><a href="/signin">Login</a></button>
            </div>
          
        </div>
      </div>)
        : 
      (<div className="lg:w-[85%] w-[90%] mx-auto grid  grid-cols-12 gap-6 lg:gap-10 py-8">
        <div className="col-span-8 lg:col-span-9 ">
          <div className="row-1 bg-white flipkart-grocery grid grid-cols-2 mb-3 py-3">
            <div className="flipkart  text-center py-1 hover:cursor-pointer relative ">
              Flipkart(3)
              {/* <span className="hover:w-[50%] bg-blue-600 h-[3px] rounded-full w-40 bottom-0 left-[70px] lg:left-36 absolute"></span> */}
            </div>
            <div className="grocery text-center py-1">Grocery</div>
          </div>
          <div className="row-2 bg-white flex justify-between px-4 mb-4 py-2">
            <div className="address flex justify-center items-center pl-8">
              From Saved Addresses
            </div>
            <div className="btn border-2 hover:border-blue-300 hover:cursor-pointer text-blue-400 outline-[#7b6363] hover:shadow-md flex items-center rounded-lg px-6 py-2">
              Enter Delivery Pincode
            </div>
          </div>
          <div className="row-3 row-span-4 overflow-y-auto h-96 bg-white relative p-4">
            <div className="card flex flex-col my-6">
              <div className="row-2.1 img-content flex space-x-4">
                <div className="img w-32 flex flex-col ">
                  <img
                    src={require("./Images/cart1.jpeg")}
                    alt="productImage"
                  />
                </div>
                <div className="basic-info text-sm">
                  acer Aspire Core i3 11th Gen-((4 GB/256 GB SSD/Windows 10
                  Home) <br />{" "}
                  <span className="text-xs text-slate-400">
                    {" "}
                    A315-58 Thin and Light Laptop 15.6 inch, Pure Silver, 1.7
                    kg){" "}
                  </span>
                  <div className="status text-xl font-thin text-red-500 mt-2">
                    Out Of Stock
                  </div>
                </div>
              </div>

              <div className="row-2.2 icon-save-remove-btn flex space-x-4 mt-5 mb-3 mx-0">
                <div className="icon w-32 flex ml-0">
                  <div className=" bg-[#ece7e76c] w-8 h-8 hover:cursor-pointer rounded-full text-sm flex justify-center items-center">
                    -
                  </div>
                  <div className=" border-2 ml-3 border-blue-100 hover:cursor-pointer px-2 h-8 round-sm text-sm flex justify-center items-center">
                    12
                  </div>
                  <div className=" bg-[#ece7e76c] ml-3 w-8 h-8 hover:cursor-pointer rounded-full text-sm flex justify-center items-center">
                    +
                  </div>
                </div>
                <div className="save-remove-btn flex space-x-6  align-bottom font-medium">
                  <div className="save">SAVE FOR LATER</div>
                  <div className="remove">REMOVE</div>
                </div>
              </div>
            </div>
            <hr />
            <div className="card flex flex-col my-6">
              <div className="row-2.1 img-content flex space-x-4">
                <div className="img w-32 flex flex-col ">
                  <img
                    src={require("./Images/cart2.jpeg")}
                    alt="productImage"
                  />
                </div>
                <div className="basic-info text-sm">
                  acer Aspire Core i3 11th Gen-((4 GB/256 GB SSD/Windows 10
                  Home) <br />{" "}
                  <span className="text-xs text-slate-400">
                    {" "}
                    A315-58 Thin and Light Laptop 15.6 inch, Pure Silver, 1.7
                    kg){" "}
                  </span>
                  <div className="status text-xl font-thin text-red-500 mt-2">
                    Out Of Stock
                  </div>
                </div>
              </div>

              <div className="row-2.2 icon-save-remove-btn flex space-x-4 mt-5 mb-3 mx-0">
                <div className="icon w-32 flex ml-0">
                  <div className=" bg-[#ece7e76c] w-8 h-8 hover:cursor-pointer rounded-full text-sm flex justify-center items-center">
                    -
                  </div>
                  <div className=" border-2 ml-3 border-blue-100 hover:cursor-pointer px-2 h-8 round-sm text-sm flex justify-center items-center">
                    12
                  </div>
                  <div className=" bg-[#ece7e76c] ml-3 w-8 h-8 hover:cursor-pointer rounded-full text-sm flex justify-center items-center">
                    +
                  </div>
                </div>
                <div className="save-remove-btn flex space-x-6  align-bottom font-medium">
                  <div className="save">SAVE FOR LATER</div>
                  <div className="remove">REMOVE</div>
                </div>
              </div>
            </div>
            <hr />
            <div className="card flex flex-col my-6">
              <div className="row-2.1 img-content flex space-x-4">
                <div className="img w-32 flex flex-col ">
                  <img
                    src={require("./Images/cart1.jpeg")}
                    alt="productImage"
                  />
                </div>
                <div className="basic-info text-sm">
                  acer Aspire Core i3 11th Gen-((4 GB/256 GB SSD/Windows 10
                  Home) <br />{" "}
                  <span className="text-xs text-slate-400">
                    {" "}
                    A315-58 Thin and Light Laptop 15.6 inch, Pure Silver, 1.7
                    kg){" "}
                  </span>
                  <div className="status text-xl font-thin text-red-500 mt-2">
                    Out Of Stock
                  </div>
                </div>
              </div>

              <div className="row-2.2 icon-save-remove-btn flex space-x-4 mt-5 mb-3 mx-0">
                <div className="icon w-32 flex ml-0">
                  <div className=" bg-[#ece7e76c] w-8 h-8 hover:cursor-pointer rounded-full text-sm flex justify-center items-center">
                    -
                  </div>
                  <div className=" border-2 ml-3 border-blue-100 hover:cursor-pointer px-2 h-8 round-sm text-sm flex justify-center items-center">
                    12
                  </div>
                  <div className=" bg-[#ece7e76c] ml-3 w-8 h-8 hover:cursor-pointer rounded-full text-sm flex justify-center items-center">
                    +
                  </div>
                </div>
                <div className="save-remove-btn flex space-x-6  align-bottom font-medium">
                  <div className="save">SAVE FOR LATER</div>
                  <div className="remove">REMOVE</div>
                </div>
              </div>
            </div>
            <hr />
            <div className="card flex flex-col my-6">
              <div className="row-2.1 img-content flex space-x-4">
                <div className="img w-32 flex flex-col ">
                  <img
                    src={require("./Images/cart2.jpeg")}
                    alt="productImage"
                  />
                </div>
                <div className="basic-info text-sm">
                  acer Aspire Core i3 11th Gen-((4 GB/256 GB SSD/Windows 10
                  Home) <br />{" "}
                  <span className="text-xs text-slate-400">
                    {" "}
                    A315-58 Thin and Light Laptop 15.6 inch, Pure Silver, 1.7
                    kg){" "}
                  </span>
                  <div className="status text-xl font-thin text-red-500 mt-2">
                    Out Of Stock
                  </div>
                </div>
              </div>

              <div className="row-2.2 icon-save-remove-btn flex space-x-4 mt-5 mb-3 mx-0">
                <div className="icon w-32 flex ml-0">
                  <div className=" bg-[#ece7e76c] w-8 h-8 hover:cursor-pointer rounded-full text-sm flex justify-center items-center">
                    -
                  </div>
                  <div className=" border-2 ml-3 border-blue-100 hover:cursor-pointer px-2 h-8 round-sm text-sm flex justify-center items-center">
                    12
                  </div>
                  <div className=" bg-[#ece7e76c] ml-3 w-8 h-8 hover:cursor-pointer rounded-full text-sm flex justify-center items-center">
                    +
                  </div>
                </div>
                <div className="save-remove-btn flex space-x-6  align-bottom font-medium">
                  <div className="save">SAVE FOR LATER</div>
                  <div className="remove">REMOVE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 lg:col-span-3 bg-white grid grid-cols-1 p-5">
          <div className="mt-1">PRICE DETAILS</div>
          <hr />
          <div className="flex justify-between mb-1 text-sm ">
            <div className="left">Price(2 items)</div>
            <div className="right">Rs 86,123</div>
          </div>
          <div className="flex justify-between mb-1 text-sm ">
            <div className="left">Discount</div>
            <div className="right">Rs -18,143</div>
          </div>
          <div className="flex justify-between mb-1 text-sm ">
            <div className="left">Coupons for you</div>
            <div className="right">Rs -50</div>
          </div>
          <div className="flex justify-between mb-1 text-sm ">
            <div className="left">Delivery Charges</div>
            <div className="right">Free</div>
          </div>
          <hr />
          <div className="flex justify-between text-sm ">
            <div className="left">Total Amount</div>
            <div className="right">67,930</div>
          </div>
          <hr />
          <div className="flex justify-between mb-1 text-sm ">
            You will save Rs18,193 on this order
          </div>
        </div>
      </div>)}
    </div>
  );
}
