import React from "react";
import "../LogoutPage/LogoutPage.css";

function LogoutPage(props) {
  return (
    <div>
      <div className="LogoutPage">
        <h1>You've been successfully logged out. </h1> 
      </div>
      <Footer />
    </div>
  );
}

export default LogoutPage;