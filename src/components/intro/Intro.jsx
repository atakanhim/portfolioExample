/* eslint-disable jsx-a11y/alt-text */
import "./Intro.scss";
import { init } from 'ityped'
import { useEffect,useRef } from "react";
export default function Intro() {
  const textRef = useRef();
  useEffect(()=>{
    console.log(textRef.current)
    //const myElement = document.querySelector('#myElement')
    
    init(textRef.current, 
      { 
        showCursor: true,
        backDelay:1900,
        startDelay: 500,

       strings: ['Engineer','Developer' ] })
  },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Atakan Him</h1>
          <h3>Software <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
        <img src="assets/down.png"></img>
        </a>
      </div>
    </div>
  );
}
