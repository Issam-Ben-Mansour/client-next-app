import React, {useState} from "react";


export default function Profile() {
  const [sidebar , setSideBar] = useState(false)
 const showSidebar = ()=> setSideBar(!sidebar)

 
  return (
    <>
    <style jsx>{`
    body {
      background: rgb(15, 15, 15);
    }
    
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300px;
      height: 100px;
      margin: -50px 0 0 -150px;
      text-align: center;
      border-radius: 8px;
      border: 3px solid rgb(0, 40, 70);
      cursor: pointer;
    }
    
    div:hover {
      animation: border-flicker 2s linear forwards;
    }
    
    h1 {
      font-family: "Open Sans";
      font-weight: 300;
      font-size:2.9em;
      margin: 15px 0 0;
      color: rgba(120, 0, 50, .5);
    }
    
    div:hover h1 {
      animation: text-flicker 2s linear forwards;
    }
    
    div:hover .first {
      animation: letter-flicker 3s linear infinite;
    }
    
    @keyframes text-flicker {
      2% { 
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
      3% {
        color: rgba(120, 0, 50, .5);
        text-shadow: none;
      }
      6% {
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
      9% {
        color: rgba(120, 0, 50, .5);
        text-shadow: none;
      }
      11% {
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
      14% {
        color: rgba(120, 0, 50, .5);
        text-shadow: none;
      }
      18% {
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
      32% {
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
      33% {
        color: rgba(120, 0, 50, .5);
        text-shadow: none;
      }
      37% {
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
      39% {
        color: rgba(120, 0, 50, .5);
        text-shadow: none;
      }
      43% {
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
      46% {
        color: rgba(120, 0, 50, .5);
        text-shadow: none;
      }
      47% {
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
      100% {
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
    }
    
    @keyframes letter-flicker {
        2% { 
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
      3% {
        color: rgba(120, 0, 50, .5);
        text-shadow: none;
      }
      6% {
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
      9% {
        color: rgba(120, 0, 50, .5);
        text-shadow: none;
      }
      11% {
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
      14% {
        color: rgba(120, 0, 50, .5);
        text-shadow: none;
      }
      18% {
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
      32% {
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
      33% {
        color: rgba(120, 0, 50, .5);
        text-shadow: none;
      }
      37% {
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
      39% {
        color: rgba(120, 0, 50, .5);
        text-shadow: none;
      }
      40% {
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
      100% {
        color: rgb(230, 0, 120);
        text-shadow: 0 0 15px rgb(230, 0, 120);
      }
    }
    
    @keyframes border-flicker {
      2% {
        border: 3px solid rgb(0, 180, 230);
        box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
        0 0 12px -1px rgb(0, 180, 230) inset;
      }
      3% {
        border: 3px solid rgb(0, 40, 70);
        box-shadow: none;
      }
      5% {
        border: 3px solid rgb(0, 180, 230);
        box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
        0 0 12px -1px rgb(0, 180, 230) inset;
      }
      6% {
        border: 3px solid rgb(0, 40, 70);
        box-shadow: none;
      }
      7% {
        border: 3px solid rgb(0, 180, 230);
        box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
        0 0 12px -1px rgb(0, 180, 230) inset;
      }
      9% {
        border: 3px solid rgb(0, 40, 70);
        box-shadow: none;
      }
      13% {
        border: 3px solid rgb(0, 180, 230);
        box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
        0 0 12px -1px rgb(0, 180, 230) inset;
      }
      16% {
        border: 3px solid rgb(0, 40, 70);
        box-shadow: none;
      }
      18% {
        border: 3px solid rgb(0, 180, 230);
        box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
        0 0 12px -1px rgb(0, 180, 230) inset;
      }
      22% {
        border: 3px solid rgb(0, 40, 70);
        box-shadow: none;
      }
      34% {
        border: 3px solid rgb(0, 180, 230);
        box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
        0 0 12px -1px rgb(0, 180, 230) inset;
      }
      36% {
        border: 3px solid rgb(0, 40, 70);
        box-shadow: none;
      }
      54% {
        border: 3px solid rgb(0, 180, 230);
        box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
        0 0 12px -1px rgb(0, 180, 230) inset;
      }
      100% {
        border: 3px solid rgb(0, 180, 230);
        box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
        0 0 12px -1px rgb(0, 180, 230) inset;
      }
    }
`}</style>

<div>
  <h1>
    Codepe<span class="first">n</span>.io
  </h1>
</div>
  
     

    </>
  );
}
