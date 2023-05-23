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
      <h1>Marriage invitation <GiDiamondRing/></h1>
      <p>
        {" "}
        <AiTwotoneHeart />
        Deepa S weds <GiLinkedRings /> Jagadhish T <AiTwotoneHeart />
      </p>
      <p>
        {" "}
        <SlCalender /> on 01-06-2023{" "}
      </p>
      <p>Dhare: 01-06-2023 </p>
      <p>
        {" "}
        <BiTime /> Muhurtha : morning 10:45 AM to 11:05 AM{" "}
      </p>
      <p>
        {" "}
        <GoLocation /> venue : Shree Basaveshwara Temple, sogalapalya,
        channapattana{" "}
      </p>
      <a
        target="_blank"
        href="https://maps.app.goo.gl/ZukpjfaGdVMuCsEC7"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        Maps <SiGooglemaps />{" "}
      </a>

      <p>
        {" "}
        invite by : <b> siddaraju S & family </b>{" "}
      </p>
       
      <img src={img} alt="img" width="400" height="300" />
    </div>
  );
}

export default App;
