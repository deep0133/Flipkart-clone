import React from "react";

export default function Order() {
  return (
    <div className="w-[1023px] lg:w-full bg-[#f3f3f3]">
      <p className="w-[90%] mx-auto pt-5 text-gray-400 text-sm">Home  My Account  My Orders</p>
      <div className="grid grid-cols-12 gap-4 w-[90%] justify-center mx-auto pt-2 pb-10">
        <div className="lg:col-span-2 col-span-3 bg-white px-3">
          <h1 className="text-2xl font-mono font-semibold">Filters</h1>
          <hr className="my-1" />
          <h2 className="text-lg font-mono font-semibold mb-2">ORDER STATUS</h2>
            <div class="group text-sm space-y-3 pb-2">
              <div className="row-1 space-x-1">
                <input type="checkbox" class="btn-check" autocomplete="off" />
                <label class="btn btn-outline-primary">On the way</label>
              </div>
              <div className="row-2 space-x-1">
                <input type="checkbox" class="btn-check" autocomplete="off" />
                <label class="btn btn-outline-primary">Delivered</label>
              </div>
              <div className="row-3 space-x-1">
                <input type="checkbox" class="btn-check" autocomplete="off" />
                <label class="btn btn-outline-primary">Cancelled</label>
              </div>
              <div className="row-4 space-x-1">
                <input type="checkbox" class="btn-check" autocomplete="off" />
                <label class="btn btn-outline-primary">Returned</label>
              </div>

              <hr />

              <div className="time text-lg font-mono font-semibold mb-2">ORDER TIME</div>

              <div className="row-1 space-x-1">
                <input type="checkbox" class="btn-check" autocomplete="off" />
                <label class="btn btn-outline-primary">Last 30 days</label>
              </div>
              <div className="row-2 space-x-1">
                <input type="checkbox" class="btn-check" autocomplete="off" />
                <label class="btn btn-outline-primary">2022</label>
              </div>
              <div className="row-3 space-x-1">
                <input type="checkbox" class="btn-check" autocomplete="off" />
                <label class="btn btn-outline-primary">2021</label>
              </div>
              <div className="row-4 space-x-1">
                <input type="checkbox" class="btn-check" autocomplete="off" />
                <label class="btn btn-outline-primary">2020</label>
              </div>
              <div className="row-4 space-x-1">
                <input type="checkbox" class="btn-check" autocomplete="off" />
                <label class="btn btn-outline-primary">2019</label>
              </div>
              <div className="row-4 space-x-1">
                <input type="checkbox" class="btn-check" autocomplete="off" />
                <label class="btn btn-outline-primary">Older</label>
              </div>

            </div>
        </div>

        <div className="col-span-9 lg:col-span-10 relative">
            <div className="row-1 space-x-1 flex bg-white hover:shadow-md w-[618px]">
                <input type="text" className="flex-shrink-0 w-[30rem]  flex-grow-0 px-3" placeholder="Search your orders here" name="search"/>
                <button className="bg-blue-600 px-4 py-2 text-sm text-white">Search Orders</button>
            </div>
            <div className="row-2 space-x-1 mt-5 py-20 space-y-2 bg-white  flex flex-col justify-center items-center">
                <div className="img">
                    <img src={require("./Images/products/emptyOrder.png")} className="w-full" alt="" />
                </div>
                <p className="font-sans font-bold text-xl">You Have no orders</p>
                <button className="bg-blue-600 text-white px-5 py-2">Start Shopping</button>
            </div>
        </div>
      </div>
    </div>
  );
}
