import React from "react"
import facebook from "../resources/facebook.png"
import linkedin from "../resources/linkedin.png"
import instagram from "../resources/instagram.png"
const style = {
  backgroundColor: "#fea730",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  paddingTop:"20px"
}



function Footer() {
  const mystyle = {
    paddingLeft:"20px"
  }
  const date = new Date().getFullYear();
  return (
      <div>
          <div />
          <div style={style}>
              <p>
                A BEAUTIFUL PROJECT TO HACKATHON OPORTO #72&74 BROGRAMMERS CO. {date} 
                <img style={mystyle} src={facebook} alt="facebook"/>
                <img style={mystyle} src={linkedin} alt="linkedin"/>
                <img style={mystyle} src={instagram} alt="instagram"/>
              </p>
          </div>
      </div>
  )
}

export default Footer