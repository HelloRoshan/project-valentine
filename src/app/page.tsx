'use client'

import { useState } from "react";
import LoadingButton from "./loading";
import Envelope from "./envelope";

export default function Home() {

  const [isHappinessVisible, setHappinessVisibility] = useState(false);

  // const handleHover = (ev:any) => {
  //   const maxWidth = 200;
  //   const maxHeight = 300;
  //   ev.target.style.left = Math.floor(Math.random()*(maxWidth+1))+'px';
  //   ev.target.style.bottom = Math.floor(Math.random()*(maxHeight+1))+'px';
  // }

  // const handleHappiness = () => {
  //   setHappinessVisibility(!isHappinessVisible);
  // }

  return (
    <div className="container flex items-center w-full justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start" style={{position:'relative'}}>
      <LoadingButton />
        { !isHappinessVisible &&
          
          <div>
            <Envelope />
        </div> }       

        {/* { isHappinessVisible && <div className="final-acceptance">
          <h3>OMG WOW</h3>
          <img src="" alt="" />
          COnfetti and Meme
        </div>} */}
      </main>
    </div>
  );
}
