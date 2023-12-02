import React from "react";

function Header () {
   const clint = "seller" ;
   const title ={
                BuyerName: "Buyer" , 
                SellerName: "Seller"
   }
   const info = {
    fName: "Samer" , 
    lName: "Gharbi"
   }

    return(
        <div className="navbar bg-black text-white">
          <h1> Hello {info.fName +" "+ info.lName}</h1>
        <h1 className = " text-white">{clint === "buyer" ? title.BuyerName : title.SellerName} web </h1>
        
        </div>
    )
}

export default Header ; 