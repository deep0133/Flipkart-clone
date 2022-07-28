import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Register({setUserStatus,setUserProfile}) {

  const [inputNumber, setInputNumber] = useState("")
  const [inputpassword, setInputpassword] = useState("")

  const navigate = useNavigate();

  const handleSubmitRegisterForm = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/createAccount', {
      "number":inputNumber,
      "password":inputpassword,
    })
    .then(function (response) {

      if(response.status){

        console.log("token of user while creating account : "+response.data.authToken);
        localStorage.setItem("authToken",response.data.authToken);

        // profile data storing in profile UseState Hook :
        axios.post('http://localhost:5000/api/auth/getuser',{},{
          headers: {
            'auth-token': localStorage.getItem("authToken"),
            'Content-Type': 'application/json',
          }
        })
        .then(function (response) {
          setUserProfile(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })

        setUserStatus(true);
        navigate("/",{replace:true})
      }

    })
    .catch(function (error) {
      console.log(error.response.data);
    });
  }


  return (
    <div>
      <div className="grid grid-cols-12 w-[700px] mt-20 mb-10 mx-auto"
      style={{"boxShadow":"3px 3px 6px gray"}}
      >
        <div className="col-span-5 flex justify-between flex-col px-8 md:px-10 lg:px-12 py-12 bg-[#2874f0]">
          <div>
            <h1 className="font-[500] text-white text-2xl mb-4">
              Looks like you're new here!
            </h1>
            <p className="text-[#aec1e0]">
              Sign up with your mobile number to get started
            </p>
          </div>
          <div className="">
            <img src={require("./Images/login.png")} alt="" />
          </div>
        </div>

        <div className="col-span-7 px-8 md:px-10 lg:px-12 pt-12 pb-44 mx-auto">
          <form autoComplete="off" onSubmit={handleSubmitRegisterForm}>
            <div className="form-group mb-8">
              <input
                autoComplete="off"
                type="text"
                value={inputNumber}
                onChange={(e)=>{setInputNumber(e.target.value)}}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border-b-2 border-blue-400 focus:outline-none focus:border-b-blue-800 focus:transition focus:duration-75 "
                placeholder="Enter Mobile number"
                required
              />
            </div>
            <div className="form-group mb-8">
              <input
                autoComplete="off"
                type="text"
                value={inputpassword}
                onChange={(e)=>{setInputpassword(e.target.value)}}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border-b-2 border-blue-400 focus:outline-none focus:border-b-blue-800 focus:transition focus:duration-75"
                placeholder="Create Password"
                required
              />
            </div>

            <div className="text-slate-400  text-xs">
              By continuing, you agree to Flipkart's{" "}
              <a target="_blank" className="text-[#2874f0]" href="#">
                Terms of Use{" "}
              </a>
              and{" "}
              <a target="_blank" className="text-[#2874f0]" href="#">
                Privacy Policy
              </a>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 my-4 bg-[#fb641b] text-white font-medium  uppercase rounded shadow-md focus:outline-none focus:ring-0"
            >
              Register
            </button>
            <button
              type="submit"
              style={{ boxShadow: "1px 1px 5px gray" }}
              className="w-full px-6 py-3 my-1 text-blue-700 font-medium uppercase rounded focus:outline-none"
            >
              Existing User? <a href="/signin">Log in</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
