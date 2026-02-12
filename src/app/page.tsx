'use client'

import { useState } from "react";
import LoadingButton from "./loading";
import Envelope from "./envelope";
import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
import { loadAll } from "@tsparticles/all"


export default function Home() {

  const [isHappinessVisible, setHappinessVisibility] = useState(false);
  const [init, setInit] = useState(false);

  const handleHappiness = (ev:any) => {
    ev.stopPropagation();
    setInit(true);
  }



  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // await loadSlim(engine);
      await loadAll(engine);
    }).then(() => {
      // setInit(true);
    });
  }, []);

  const options: Record<string, any> = useMemo(
    () => ({
      "fullScreen": {
        "zIndex": 1
      },
      "particles": {
        "number": {
          "value": 0
        },
        "color": {
          "value": [
            "#00FFFC",
            "#FC00FF",
            "#fffc00"
          ]
        },
        "shape": {
          "type": [
            "circle",
            "emoji"
          ],
          "options": {
            "emoji": {
              "particles": {
                "size": {
                  "value": 8
                }
              },
              "value": [
                "🌹","❤️",
              ]
            }
          }
        },
        "angle": "randomInRange(55, 125)",
        "spread": "randomInRange(50, 70)",
        "particleCount": "randomInRange(50, 100)",
        "origin": { y: 0.6 },
        "opacity": {
          "value": {
            "min": 0,
            "max": 1
          },
          "animation": {
            "enable": true,
            "speed": 2,
            "startValue": "max",
            "destroy": "min"
          }
        },
        "size": {
          "value": {
            "min": 2,
            "max": 4
          }
        },
        "links": {
          "enable": false
        },
        "life": {
          "duration": {
            "sync": true,
            "value": 5
          },
          "count": 1
        },
        "move": {
          "enable": true,
          "gravity": {
            "enable": true,
            "acceleration": 10
          },
          "speed": {
            "min": 10,
            "max": 20
          },
          "decay": 0.1,
          "direction": "none",
          "straight": false,
          "outModes": {
            "default": "destroy",
            "top": "none"
          }
        },
        "rotate": {
          "value": {
            "min": 0,
            "max": 360
          },
          "direction": "random",
          "move": true,
          "animation": {
            "enable": true,
            "speed": 60
          }
        },
        "tilt": {
          "direction": "random",
          "enable": true,
          "move": true,
          "value": {
            "min": 0,
            "max": 360
          },
          "animation": {
            "enable": true,
            "speed": 60
          }
        },
        "roll": {
          "darken": {
            "enable": true,
            "value": 25
          },
          "enable": true,
          "speed": {
            "min": 15,
            "max": 25
          }
        },
        "wobble": {
          "distance": 30,
          "enable": true,
          "move": true,
          "speed": {
            "min": -15,
            "max": 15
          }
        }
      },
      "emitters": {
        "life": {
          "count": 10,
          "duration": 0.2,
          "delay": 0.5
        },
        "rate": {
          "delay": 0.1,
          "quantity": 250
        },
        "size": {
          "width": 0,
          "height": 0
        }
      }
    }),
    [],
  );


  return (
    <div className="flex items-center w-full justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start" style={{position:'relative', alignItems: 'center'}}>
      { init &&
      <div style={{position: 'absolute'}}>
        <Particles
        id="tsparticles"
        options={options}
      />
      </div>
      }
      <LoadingButton />
        { !isHappinessVisible &&
          
          <div style={{marginTop: '7rem'}}>
            <Envelope  handleHappiness={handleHappiness}/>
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
