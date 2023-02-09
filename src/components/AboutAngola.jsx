import React from "react";
import infographic from "../resources/angolainfo.png"
import Footer from "./Footer";
import NavbarExample from "./NavbarExample";

function AboutAngola() {
    return(
        <>
    <NavbarExample />    
    <div style={{display: "flexbox", justifyContent:"center", textAlign:"center"}}>
        <img src={infographic} alt="Angola Statistics infographic"/>
    </div>
    <Footer />
        </>

    )}

export default AboutAngola;