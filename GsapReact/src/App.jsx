import './App.css'
import gsap  from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';

function App() {

  // useGSAP(() => {
  //   gsap.to("#box", { duration: 2, y:200,x:200, ease: "power1.out", delay:1 });
  // }, []);

  // Method 2

  let gsapRef = useRef();

  useGSAP(()=>{
    gsap.to(gsapRef.current, {
      duration:2,
      y:200,
      delay:1,
      ease:"power2.out"

    })
  })

  return (
    <>
    <main>
      <div ref={gsapRef} id="box">
      </div>
    </main>
    </>
  )
}

export default App
