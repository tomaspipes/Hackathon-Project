import React from "react";
import { FaInbox, FaPhone } from 'react-icons/fa';



export default function Contacts(){

    
    return (
        <>
      <div>
        
  <div class="transbox"style={{textAlign:"center"}}>
    <h2 style={{marginTop: "40px"}}>Meet Us</h2>
    <p style={{marginTop:"30px", marginBottom:"10px"}}>Do you have any questions? Please do not hesitate to contact us directly.</p>
    <p style={{marginTop:"10px", marginBottom:"10px"}}>Our team will come back to you within a matter of hours to help you.</p>
    <p> <FaPhone/> &nbsp; +351 912 222 222</p>
    <p> <FaInbox/> &nbsp; comewithme@gmail.com</p>
  </div>
</div>
<form style = {{textAlign:"center"}}>

</form>


      </>
  );  
    
}