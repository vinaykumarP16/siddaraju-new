import * as React from 'react';
import { AiTwotoneHeart } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { GiDiamondRing, GiLinkedRings } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { SiGooglemaps } from 'react-icons/si';
import { SlCalender } from 'react-icons/sl';
import img from './img.jpeg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor:'yellow'}}>Marriage invitation <GiDiamondRing/></h1>
      <h2 style={{backgroundColor:'yellow', color:'red'}}>
        {" "}
        <AiTwotoneHeart />
        Deepa S weds <GiLinkedRings /> Jagadhish T <AiTwotoneHeart />
      </h2>
      <p style={{backgroundColor:'yellow'}}>
        {" "}
        <SlCalender /> on 01-06-2023{" "}
      </p>
      <p style={{backgroundColor:'yellow'}}>Dhare: 01-06-2023 </p>
      <p  style={{backgroundColor:'yellow'}}>
        {" "}
        <BiTime /> Muhurtha : morning 10:45 AM to 11:05 AM{" "}
      </p>
      <p style={{backgroundColor:'yellow'}}>
        {" "}
        <GoLocation /> venue : Shree Basaveshwara Temple, sogalapalya,
        channapattana{" "}
      </p>
      <a
        target="_blank"
        href="https://maps.app.goo.gl/ZukpjfaGdVMuCsEC7"
        rel="noreferrer"
        style={{ textDecoration: "none",backgroundColor:'yellow' }}
      >
        Maps <SiGooglemaps />{" "}
      </a>

      <p style={{backgroundColor:'yellow'}}>
        {" "}
        invite by : <b> siddaraju S & family </b>{" "}
      </p>
       
      <img src={img} style={{borderRadius:'50%'}}  alt="img" width="400" height="300" />
    </div>
  );
}

export default App;
