import Home from "./components/Home";
import Header2 from "./components/Header2";
import Cart from "./components/Cart";
import Product from "./components/Product";
import BuyProduct from "./components/BuyProduct";
import Footer from "./components/Footer";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { useState,useEffect } from "react";
import axios from 'axios';
import {
  Routes,
  Route,
} from "react-router-dom";
import Order from "./components/Order";

function App() {

  const [userStatus, setUserStatus] = useState(false);
  const [userProfile, setUserProfile] = useState(false);

  
  
  useEffect(()=>{
    
    async function fetchData() {

      console.log("Use Effect trigered and fetchData working:");

      const token = await localStorage.getItem("authToken");
      
    await axios.post('http://localhost:5000/api/auth/getuser',{},{
      headers: {
        'auth-token': token,
        'Content-Type': 'application/json',
      }
    })

    .then(async (response) => {
      await setUserProfile(response.data);
      console.log("useEffect in app profile data :" + userProfile._id);

      setUserStatus(true);
    })
    .catch(function (error) {
      console.log("error : "+error);
    })
  }
  fetchData();
  },[])


  return (
    <div className="App">
      
          <Routes>
            <Route exact path="/" element={<><Header2 setUserStatus={setUserStatus} userStatus={userStatus} userProfile={userProfile}/> <Home  /> </>} />
            <Route exact path="/profile" element={ <Profile setUserStatus={setUserStatus} userStatus={userStatus} userProfile={userProfile} setUserProfile={setUserProfile} /> } />
            <Route exact path="/product" element={ <> <Header2 setUserStatus={setUserStatus} userStatus={userStatus} userProfile={userProfile}/> <Product /> </>}   />
            <Route exact path="/buyproduct" element={<><Header2 setUserStatus={setUserStatus} userStatus={userStatus} userProfile={userProfile}/> <BuyProduct /> </>} />
            <Route exact path="/placeorder" element={<><Header2 setUserStatus={setUserStatus} userStatus={userStatus} userProfile={userProfile}/> <Order /> </>} />
            <Route exact path="/signin" element={<> <Header2 setUserStatus={setUserStatus} userStatus={userStatus} userProfile={userProfile}/>  <Signin userStatus={userStatus} setUserStatus={setUserStatus} userProfile={userProfile} setUserProfile={setUserProfile}/> </>} />
            <Route exact path="/createAccount" element={<> <Header2 setUserStatus={setUserStatus} userStatus={userStatus} userProfile={userProfile}/>  <Register setUserStatus={setUserStatus} setUserProfile={setUserProfile} /> </>} />
            <Route exact path="/viewCart" element={<> <Header2 setUserStatus={setUserStatus} userStatus={userStatus} userProfile={userProfile}/>  <Cart userStatus={userStatus}/> </>} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
