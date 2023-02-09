import React from "react";
import msflogo from "../resources/msflogo.png"
import ualogo from "../resources/ualogo.png"
import unfpalogo from "../resources/unfpalogo.png"
import whologo from "../resources/whologo.png"
import cuamlogo from "../resources/cuamlogo.png"
import uneplogo from "../resources/uneplogo.png"

export default function Partners(){
   const mystyle = {
       paddingLeft: "150px",
   }

    return (
    <div id="partners">
        <img style = {mystyle} src = {msflogo} alt="msflogo"/>
        <img style = {mystyle}src = {ualogo} alt = "ualogo"/>
        <img style = {mystyle} src = {unfpalogo} alt ="unfpalogo"/>
        <img style = {mystyle} src = {cuamlogo} alt ="cuamlogo"/>
        <img style = {mystyle} src = {uneplogo} alt ="uneplogo"/>
        <img style = {mystyle} src = {whologo} alt ="whologo"/>
    </div>
    )}