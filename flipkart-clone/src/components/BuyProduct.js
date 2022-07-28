import React from "react";

export default function BuyProduct() {
  return (
    <div>
      <div className="flex w-[1023px] min-h-full mx-auto justify-center my-5 overflow-auto">
        <div className="col-1 w-[323px] flex-shrink-0">
          <div className="left-side flex border-2 p-3 pb-5">
            <div className="part-1 images w-[14%] h-80 overflow-auto space-y-3 px-1 flex-grow-0">
              <img src={require("./Images/products/l1.webp")} alt="" />
              <img src={require("./Images/products/l2.webp")} alt="" />
              <img src={require("./Images/products/l3.webp")} alt="" />
              <img src={require("./Images/products/l5.webp")} alt="" />
              <img src={require("./Images/products/l6.webp")} alt="" />
              <img src={require("./Images/products/l6.webp")} alt="" />
            </div>
            <div className="part-2 thumbnail w-[85%] flex justify-center items-center  flex-grow-0">
              <img src={require("./Images/products/l1.webp")} alt="" />
            </div>
          </div>
          <div className="left-side-button w-full flex justify-center items-center mt-3">
            <button className="px-4 py-3 bg-orange-400 w-44 mr-2 rounded-sm font-medium text-white">
              ADD TO CART
            </button>
            <button className="px-4 py-3 bg-orange-600 w-44 ml-2 rounded-sm font-medium text-white">
              BUY NOW
            </button>
          </div>
        </div>
        <div className="col-2 border-2 w-[700px] flex-shrink-0 p-4 pt-0 space-y-1">
          <p className="text-gray-400 text-xs mb-1">
            Home Computers Laptops HP Laptops
          </p>
          <h1 className="">
            
            HP Core i3 11th Gen - (8 GB/256 GB SSD/Windows 11 Home) 14s-
            dy2506TU Thin and Light Laptop (14 inch, Natural Silver, 1.46 kg,
            With MS Office)
          </h1>
          <p className="text-gray-600 text-xs mb-1 font-medium">
            4.3 star 1,734 Ratings & 202 Reviews
          </p>
          <p className="text-sm text-green-600">Extra 3500rs off</p>
          <div className="flex items-baseline space-x-3">
            <p className="text-xl font-medium">₹35,440</p>
            <p className="line-through text-sm text-gray-400">₹48933</p>
            <p className="text-sm text-green-500">27% off</p>
          </div>
          <p className="font-light text-sm">Or Pay ₹35,340 + 100 coin</p>

          <div className="text-sm font-medium space-y-1">
            <p>Coupons for you</p>
            <p className="font-light">
              Partner Offer
              <span className="text-gray-600">
                
                Purchase now & get a surprise cashback coupon for The Big
                Billion Days Sale 2022Know More
              </span>
            </p>
            <p className="text-blue-500">View 1 more coupon</p>
          </div>

          <div className="font-medium text-sm space-y-1 my-1">
            <h1>Available offers</h1>
            <p>
              Bank Offer
              <span className="text-gray-600">{" "}
                
                10% off on Axis Bank Credit Cards, up to ₹1250. On orders of
                ₹3000 and aboveT&C
              </span>
            </p>

            <p>
              Bank Offer
              <span className="text-gray-600">{" "}
                
                5% off on Flipkart Axis Bank Co Brand Card, up to ₹625. On
                orders of ₹3000 and aboveT&C
              </span>
            </p>
            <p>
              Bank Offer
              <span className="text-gray-600">{" "}
                
                10% off on Kotak Bank Credit Cards, up to ₹1,500. On orders of
                ₹3,000 and aboveT&C
              </span>
            </p>
            <p className="text-blue-500 pb-6">View 12 more offers</p>
          </div>
          <div className="specifications border-2 p-3 pt-0 pb-10 space-x-3">
          <h1 className="border-b-2 text-lg font-medium px-3 py-4">Specifications</h1>

          <h2 className="mt-3 pt-4">General</h2>
          <div className="grid grid-cols-12 text-sm space-y-3">
          <div className="col-span-3 text-gray-500 mt-3">  Sales Package </div>
          <div className="col-span-9">  Laptop, Power Adaptor, Battery, Warranty Documents, User Guide </div>
          <div className="col-span-3 text-gray-500" >  Model Number </div>
          <div className="col-span-9" >  14s- dy2506TU </div>
          <div className="col-span-3 text-gray-500" >  Part Number </div>
          <div className="col-span-9" >  546K2PA#ACJ </div>
          <div className="col-span-3 text-gray-500" >  Model Name </div>
          <div className="col-span-9" >  14s- dy2506TU </div>
          <div className="col-span-3 text-gray-500" >  Color </div>
          <div className="col-span-9" >  Natural Silver </div>
          <div className="col-span-3 text-gray-500" >  Type </div>
          <div className="col-span-9" >  Thin and Light Laptop </div>
          <div className="col-span-3 text-gray-500" >  Suitable For </div>
          <div className="col-span-9" >  Processing & Multitasking </div>
          <div className="col-span-3 text-gray-500" >  Battery Cell </div>
          <div className="col-span-9" >  3 Cell </div>
          <div className="col-span-3 text-gray-500" >  MS Office Provided </div>
          <div className="col-span-9" >  Yes </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
