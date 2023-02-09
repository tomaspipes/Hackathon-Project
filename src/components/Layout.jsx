import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import tests from "../tests.js"
import Testemonials from "./Testemonials";
import NavbarExample from "./NavbarExample";
import arvore from "../resources/arvore.png"
import Buttons from "./Button";
import Partners from "./Partners";

const Layout = () => {
  const mystyle = {
    width:"100%",
  }

  const mystyle4 = {
    float:"right",
    color:"#fea730",
    marginLeft:"25px",
    marginTop:"25px",
    textAlign:"center",
  }

  const mystyle5={
    display:"flex",
  }

  const mystyle6 = {
    fontSize:"0.5em",
    textAlign:"center",
    color:"black",
    fontFamily: "Montserrat, sans-serif",
    margin: "40px 40px 40px 40px"
  }

  const mystyle7 = {
    color:"#fea730",
    padding:"20px"
  }

  const mystyle8 = {
    color:"#fea730",
    paddingTop:"px"
  }

  return (
    <>
      <NavbarExample />
      <div>
        <img style = {mystyle} src={arvore} alt ="arvore" />
        </div>
        <div style={mystyle5} >
            <h1 style = {mystyle4}>   
              Work With Us For a Better Future
              <p style={mystyle6}>We create a connection between professionals and organisations that are willing to promote a country’s growth towards a better future in health and the environment. Through shared knowledge and expertise we improve processes and systems.
              <p>At the moment we have several projects in Angola (Africa) in health education, hospitals, agriculture and environmental intervention. </p>
              </p>
              <Buttons />
            </h1>
        </div>
        <div>
        <div id= "partners-div">
          <h2  style={mystyle7} className = "align-center">Our Partners</h2>
        </div>
        <Partners />
        <div style={{marginTop: "90px"}}>
        <hr></hr>
        </div>
        
        <div id= "partners-div">
          <h2 style = {mystyle8} className = "align-center">Testimonials</h2>
        </div>
        {tests.map(noteItem => (
            <Testemonials
              key={noteItem.key}
              name={noteItem.name}
              content={noteItem.content}
            />
            ))}
        </div>
      <Footer />
      <Outlet />

    </>
  );
};

export default Layout;