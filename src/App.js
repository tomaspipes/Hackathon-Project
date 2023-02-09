import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from './components/Contact';
import Join from './components/Join';
import OrganizationFormComponent from './components/OrganizationFormComponent';
import AboutUs from './components/AboutUs';
import AboutAngola from './components/AboutAngola';


export default function App(){
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/joinus" element={<Join />}/>
      <Route path="/organizationform" element={<OrganizationFormComponent />}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/aboutangola" element={<AboutAngola/>}/>
      </Routes>
    </BrowserRouter>
  )}
