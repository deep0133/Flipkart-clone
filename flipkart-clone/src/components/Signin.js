import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Signin({setUserStatus, userStatus,userProfile, setUserProfile}) {

  const [name, setName] = useState(null)
  const [password, setPassword] = useState(null)
  const navigate = useNavigate();

  useEffect(()=>{
   
    if(userStatus){
      navigate("/",{replace:true})
    }
  },[userStatus])


  const formSubmit = async(e)=>{
    e.preventDefault();
    await axios.post('http://localhost:5000/api/auth/login', {
      "number":name,
      "password":password,
      headers:{
        'Content-Type': 'application/json',
      }
    })
    .then(function (response) {

      // user login Status:
      if(response.status){

        // console.log(response.data.authToken);
        localStorage.setItem("authToken",response.data.authToken);
        setUserStatus(true);

        // profile data store in profile UseState:
        axios.post('http://localhost:5000/api/auth/getuser',{},{
          headers: {
            'auth-token': localStorage.getItem("authToken"),
            'Content-Type': 'application/json',
          }
        })
        .then(function (response) {
          setUserProfile(response.data)
          console.log(`profile data : ${userProfile}`);

        })
        .catch(function (error) {
          console.log(error);
        })

      }


    })
    .catch(function (error) {
      console.log(error.response.data);
      navigate("/signin",{replace:true})
    });

  }

  return (
    <div>
      <div className="grid grid-cols-12 w-[700px] mt-20 mb-10 mx-auto shadow-md"
      style={{"boxShadow":"3px 3px 6px gray"}}
      >
        <div className="col-span-5 flex justify-between flex-col px-8 md:px-10 lg:px-12 py-12 bg-[#2874f0]">
        <div>
            
          <h1 className="font-[500] text-white text-2xl mb-4">Login</h1>
          <p className="text-[#aec1e0]">
            Get access to your Orders, Wishlist and Recommendations
          </p>
         
          </div>
          <div className="">
            <img src={require("./Images/login.png")} alt="" />
          </div>
        </div>

        <div className="col-span-7 odd:px-8 md:px-10 lg:px-12 py-12 mx-auto">
          <form onSubmit={formSubmit}>
            <div className="form-group mb-6">
              <input
                autoComplete="off"
                type="number"
                onChange={(e)=>{setName(e.target.value); console.log(e.target.value)}}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border-b-2 border-blue-600 focus:outline-none"
                id="name"
                placeholder="Enter Phone Number"
                required
                minLength={10}
                maxLengt={10}
              />
            </div>
            <div className="form-group mb-6">
              <input
                autoComplete="off"
                type="password"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border-b-2 border-blue-600 focus:outline-none"
                id="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="text-slate-400 text-xs">
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
              Sign in
            </button>
            <div>
              <div className="text-center text-slate-400">OR</div>

              <button
              type="submit"
              style={{"boxShadow":"1px 1px 5px gray"}}
              className="w-full px-6 py-3 my-4 text-blue-700 font-medium uppercase rounded focus:outline-none"
            >
             Request OTP
            </button>

            </div>
            <div className="text-sm text-center text-[#2874f0] mt-10 mb-2">
              <a href="/createAccount">
                New to Flipkart? Create an account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
