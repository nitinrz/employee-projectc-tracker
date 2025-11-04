import React, { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStrorage";

const Header = ({data}) => {
  
  // const [username, setusername] = useState('')
  // if(!data){
  //   setusername('admin')
  // }else{
  //   setusername(data.name)
  // }

const logOutUser = ()=>{
 localStorage.setItem('loggedInUser','')
 window.location.reload()
}
  
  return (
    
        <header className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg rounded-2xl m-4 text-white ">
      <div className="">
        <h1 className="text-3xl font-bold leading-tight">
          Hello, <br />
          <span className="text-yellow-300"> jii</span>
        </h1>
      </div>

      <button  onClick={logOutUser}
        className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-xl shadow-md hover:bg-indigo-50 transition-all duration-300"
      >
        Log Out
      </button>
    </header>
    
  );
};

export default Header;
