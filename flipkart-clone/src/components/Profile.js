import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Header2";
export default function Profile({ userStatus, setUserStatus, userProfile,setUserProfile }) {
  let navigate = useNavigate();

  useEffect(() => {
    console.log("userState : " + userStatus);
    if (!userStatus) {
      console.log("user want to come login page by changing url :");
      navigate("/signin?msg=login_required", { replace: true });
    }
  }, []);

  const handleLogout = () => {
    console.log("logout fire : ");
    localStorage.removeItem("authToken");
    setUserStatus(false);
    navigate("/signin", { replace: true });
  };

  if (userStatus) {
    console.log("user loged in already:");
    return (
      <>
        <Header2 setUserStatus={setUserStatus} userStatus={userStatus} userProfile={userProfile} />

        <div className="lg:w-full w-[1023px]  bg-[#f3f3f3] py-5">
          <div className="grid grid-cols-7 lg:w-[85%] w-[90%] gap-4 mx-auto m-2 ">
            <div className="row-1 col-span-2">
              <div className="head p-3 flex space-x-3 items-center bg-white">
                <div className="thumnail flex">
                <span className=" ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 bg-gray-200 text-green-600 rounded-full p-0 border-none"
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
                </div>
                <div className="name block mt-1">
                  <p className="text-xs tet-gray-600 font-light">Hello,</p>
                  <p className="text-lg font-semibold font-mono">
                    {userProfile.fname +" "+ userProfile.lname} 
                  </p>
                </div>
              </div>
              <div className="body my-5 bg-white py-3 px-4 space-y-5 text-gray-700">
                <p className="flex mt-3 ml-1">
                  {" "}
                  <span className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                    >
                      <g
                        fill="none"
                        fillRule="evenodd"
                        transform="translate(-8.694 -11)"
                      >
                        <ellipse cx="20.557" cy="20" rx="20.557" ry="20" />
                        <path
                          fill="#2874F1"
                          d="M9 11v17.108c0 .493.41.892.918.892h4.93v-5.257h-3.033l4.912-4.77 4.972 4.83h-3.035V29h12.417c.507 0 .918-.4.918-.892V11H9z"
                        />
                      </g>
                    </svg>
                  </span>{" "}
                  MY ORDERS
                </p>
                <hr />
                <p className="flex">
                  <span className="text-blue-500 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>{" "}
                  ACCOUNT SETTINGS
                </p>
                <p className="flex ml-10">Profile Information</p>
                <p className="flex ml-10">Manage Addresses</p>
                <p className="flex ml-10">PAN Card Information</p>
                <hr />
                <p className="flex">
                  {" "}
                  <span className="mr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                    >
                      <g
                        fill="none"
                        fillRule="evenodd"
                        transform="translate(-9.694 -9)"
                      >
                        <ellipse cx="20.557" cy="20" rx="20.557" ry="20" />
                        <path d="M7 6h28v28H7z" />
                        <path
                          fill="#2874F0"
                          fillRule="nonzero"
                          d="M31.5 27v1.167a2.34 2.34 0 0 1-2.333 2.333H12.833a2.333 2.333 0 0 1-2.333-2.333V11.833A2.333 2.333 0 0 1 12.833 9.5h16.334a2.34 2.34 0 0 1 2.333 2.333V13H21a2.333 2.333 0 0 0-2.333 2.333v9.334A2.333 2.333 0 0 0 21 27h10.5zM21 24.667h11.667v-9.334H21v9.334zm4.667-2.917c-.97 0-1.75-.782-1.75-1.75s.78-1.75 1.75-1.75c.968 0 1.75.782 1.75 1.75s-.782 1.75-1.75 1.75z"
                        />
                      </g>
                    </svg>
                  </span>{" "}
                  PAYMENTS
                </p>
                <p className="flex ml-10">Gift Cards</p>
                <p className="flex ml-10">Saved UPI</p>
                <p className="flex ml-10">Saved Cards</p>
                <hr />
                <p className="flex">
                  {" "}
                  <span className="mr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path
                        fill="#2874F0"
                        fillRule="evenodd"
                        d="M12.792 4.802V3.189H3.19v1.613h9.603zM9.604 9.604V7.99H3.189v1.613h6.415zM3.189 5.59v1.613h9.603V5.59H3.19zM14.406 0c.425 0 .794.156 1.106.469.313.313.47.681.47 1.107v9.603c0 .426-.157.8-.47 1.126-.312.325-.681.487-1.106.487H3.189L0 15.982V1.575C0 1.15.156.782.469.469A1.514 1.514 0 0 1 1.576 0h12.83z"
                      />
                    </svg>
                  </span>{" "}
                  MY CHATS
                </p>
                <hr />
                <p className="flex">
                  {" "}
                  <span className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="19"
                      viewBox="0 0 23 19"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          fill="#2874F0"
                          fillRule="nonzero"
                          d="M20.5 2.75h-9L9.25.5H2.5A2.247 2.247 0 0 0 .26 2.75l-.01 13.5A2.257 2.257 0 0 0 2.5 18.5h18a2.257 2.257 0 0 0 2.25-2.25V5a2.257 2.257 0 0 0-2.25-2.25zm-5.625 3.375a2.257 2.257 0 0 1 2.25 2.25 2.257 2.257 0 0 1-2.25 2.25 2.257 2.257 0 0 1-2.25-2.25 2.257 2.257 0 0 1 2.25-2.25zm4.5 9h-9V14c0-1.496 3.004-2.25 4.5-2.25s4.5.754 4.5 2.25v1.125z"
                        />
                        <path d="M-2-4h27v27H-2z" />
                      </g>
                    </svg>
                  </span>{" "}
                  MY STUFF
                </p>
                <p className="flex ml-10">My Coupons</p>
                <p className="flex ml-10">My Reviews & Ratings</p>
                <p className="flex ml-10">All Ntifications</p>
                <p className="flex ml-10">My wishlist</p>
                <hr />
                <p className="flex mr-3 hover:cursor-pointer" onClick={handleLogout} >
                  <span className="mr-4">
                    <svg
                      width="24"
                      height="24"
                      className=""
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#2874F0"
                        strokeWidth="0.3"
                        stroke="#2874F0"
                        d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
                      ></path>
                    </svg>
                  </span>{" "}
                  Logout
                </p>
              </div>
              <div className="footer block text-sm bg-white p-4 ">
                <h1 className="font-medium">Frequently Visited:</h1>
                <p className="text-gray-600 h-10">
                  <p className="text-xs float-left">Change Password </p>
                  <p className="text-xs float-left ml-1 mr-3">Track Order</p>
                  <p className="text-xs  pt-1 lg:pt-0 float-left">
                    Help Center
                  </p>
                </p>
              </div>
            </div>
            <div className="row-2 col-span-5 bg-white">
              <form className="space-y-6 px-6 py-5">
                <div className="form-group space-y-4">
                  <label className="font-medium flex space-x-8">
                    <p className="text-lg">Personal Information</p>
                    <span className="text-blue-500 hover:cursor-pointer">
                      edit
                    </span>
                  </label>
                  <div className="input space-x-2 lg:space-x-3">
                    <input
                      type="text"
                      className="outline-none w-60 hover:cursor-not-allowed xl:w-72 bg-[#f3f3f3] border-2  p-3 "
                      name="fname"
                      value={userProfile.fname}
                      placeholder="First Name"
                      readOnly
                    />
                    <input
                      type="text"
                      className="outline-none w-60 xl:w-72 hover:cursor-not-allowed bg-[#f3f3f3] border-2  p-3 "
                      name="lname"
                      value={userProfile.lname}
                      readOnly
                      placeholder="First Name"
                    />
                  </div>
                </div>

                <div className="form-group space-y-4 block">
                  <label className="text-sm text-gray-600">Your Gender</label>
                  <div className="form flex ">
                    <input
                      type="radio"
                      name="gender"
                      className="mr-1 hover:cursor-not-allowed"
                      value={"male"}
                      readOnly
                    />{" "}
                    Male
                    <input
                      type="radio"
                      name="gender"
                      className="mr-1 ml-4 hover:cursor-not-allowed"
                      value={"female"}
                      readOnly
                    />{" "}
                    Female
                  </div>
                </div>

                <div className="form-group space-y-4">
                  <label className="text-lg flex space-x-8 items-baseline text-gray-700 font-medium">
                    <p className="">Email Address</p>
                    <span className="text-sm text-blue-500 hover:cursor-pointer">
                      edit
                    </span>
                    <span className="text-sm text-blue-500 hover:cursor-pointer">
                      Change Password
                    </span>
                  </label>
                  <input
                    type="email"
                    className="outline-none w-60 xl:w-72 hover:cursor-not-allowed bg-[#f3f3f3] border-2  p-3 "
                    name="fname"
                    value={userProfile.email}
                    readOnly
                  />
                </div>

                <div className="form-group space-y-4">
                  <label className="text-lg flex space-x-8 items-baseline text-gray-700 font-medium">
                    <p className="flex">Mobile Number</p>
                    <span className="text-sm text-blue-500 hover:cursor-pointer">
                      edit
                    </span>
                  </label>
                  <input
                    type="number"
                    className="outline-none w-60 xl:w-72 hover:cursor-not-allowed bg-[#f3f3f3] border-2  p-3 "
                    name="number"
                    value={userProfile.number}
                    readOnly
                  />
                </div>
              </form>

              <div className="content">
                <h1 className="text-lg font-semibold  px-6 py-5"> FAQs</h1>
                <p className=" px-6 py-5">
                  <h2 className="font-medium mt-3">
                    Q : What happens when I update my email address (or mobile
                    number)?
                  </h2>
                  <p className="font-thin mt-1 ">
                    A : Your login email id (or mobile number) changes,
                    likewise. You'll receive all your account related
                    communication on your updated email address (or mobile
                    number).
                  </p>
                  <h2 className="font-medium mt-3">
                    Q : When will my Flipkart account be updated with the new
                    email address (or mobile number)?
                  </h2>

                  <p className="font-thin mt-1 ">
                    A : It happens as soon as you confirm the verification code
                    sent to your email (or mobile) and save the changes.
                  </p>

                  <h2 className="font-medium mt-3">
                    Q : What happens to my existing Flipkart account when I
                    update my email address (or mobile number)?
                  </h2>

                  <p className="font-thin mt-1 ">
                    A : Updating your email address (or mobile number) doesn't
                    invalidate your account. Your account remains fully
                    functional. You'll continue seeing your Order history, saved
                    information and personal details.
                  </p>

                  <h2 className="font-medium mt-3">
                    Q : Does my Seller account get affected when I update my
                    email address?
                  </h2>
                  <p className="font-thin mt-1 ">
                    A : Flipkart has a 'single sign-on' policy. Any changes will
                    reflect in your Seller account also.
                  </p>
                </p>
                <div className="img w-full m-0 p-0 mt-5">
                  <img
                    src={require("./Images/products/profile-footer.png")}
                    className="w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
}
