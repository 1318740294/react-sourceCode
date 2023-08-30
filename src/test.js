import React, { useEffect, useState } from "react";
import './index.css'
export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.addEventListener(
      "click",
      () => {
        console.warn("document原生捕获");
      },
      true
    );
    document.addEventListener("click", () => {
      console.warn("document原生冒泡");
    })
  },[])

  return (
    <div className="BgPink" 
      onClick={() => {
        console.warn('222');
      // setCount(() => count + 2);
      }}
    >

      <h1
        st
        className="BgBlue"
        onClick={(e) => {
          console.warn('joker',e);
          e.stopPropagation()
        }}
      >
        joker
      </h1>
      <p 
        className="BgBlack"
        onClick={
          () => {
            console.warn('PClassName');
          }
      }>
        {count}
      </p> 
    </div>
  );
}
