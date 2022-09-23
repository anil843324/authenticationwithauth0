import React, { useEffect } from "react";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from "js-cookie";




const Navbar = () => {
  const { loginWithRedirect, user, logout, isAuthenticated ,isLoading } = useAuth0();
 
  
       
   useEffect(() => {
    
    if(isAuthenticated){
      loginWithRedirect()
    }


   }, [])
   
   if (isLoading) {
    return <div>Loading ...</div>;
  }
         
     

  return (
    <div className="bigContainer">
      <div className="container">
        <span className="logo">Logo</span>

        <div className="smallContainer">
          <span>Home</span>
          <span>Contact</span>
          <span>Services</span>
          {isAuthenticated ? <span> {user?.given_name}</span> : <></>}
          {!isAuthenticated ? (
            <span
              onClick={() =>  loginWithRedirect()}
              style={{
                cursor: "pointer",
                backgroundColor: "blue",
                color: "white",
                padding: "3px",
                borderRadius: "4px",
              }}
            >
              login
            </span>
          ) : (
            <span
              onClick={() =>  logout()   }
              style={{
                cursor: "pointer",
                backgroundColor: "red",
                color: "white",
                padding: "3px",
                borderRadius: "4px",
              }}
            >
              logout
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
