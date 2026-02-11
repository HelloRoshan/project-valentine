'use client'

import { useState } from "react";
import "./envelope.css";

export default function Envelope({handleHappiness}: {handleHappiness:any}) {
  const [open, setOpen] = useState(false);
  const [sealBroken, setSealBroken] = useState(false);
  const handleHover = (ev:any) => {
    const maxWidth = 500;
    const maxHeight = 300;
    ev.target.style.left = Math.floor(Math.random()*(maxWidth+1))+'px';
    ev.target.style.bottom = Math.floor(Math.random()*(maxHeight+1))+'px';
  }

  const handleClick = () => {
    if (!sealBroken) {
      setSealBroken(true);
      setTimeout(() => setOpen(true), 400);
    } else {
      setOpen(!open);
    }
  };


  return (
    <div className="envelope-wrapper" onClick={handleClick}>
      <div className={`envelope ${open ? "open" : ""}`}>

        {/* Message / Letter */}
        <div className={`letter ${open ? "show" : ""}`}>
          <h4>Hey ❤️, Just wanted to ask.</h4>
          <h4>Will you be my Valentine?</h4>
          <div style={{display: 'flex', alignItems: 'stretch', justifyContent: 'center'}}>

            <button onClick={handleHappiness} style={{zIndex: '6'}}>Yes</button>
            <div style={{position:"relative"}}>
              <button className="btn btn-blue" onMouseEnter={handleHover} style={{position:'absolute'}}>No</button>
            </div>
          </div>
          {/* </p> */}
        </div>

        {/* Heart Seal */}
        {!open && (
          <div className={`heart ${sealBroken ? "break" : ""}`}>
            <span className="left">❤️</span>
          </div>
        )}

        <div className="front"></div>
        <div className="top"></div>
      </div>
    </div>
  );
}
