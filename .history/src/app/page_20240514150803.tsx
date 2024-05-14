'use client'
import exp from "constants";
import Image from "next/image";

 

import axios from 'axios';


export default function Home() {

 

  const test = async()=>{
    const {data} = await axios.post('/api/xxx', {
      user:'2323243'
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log("Testing=========",data);
  }

  function handleClick() {
    console.log("increment like count")
    test();
  }
  return (
    <main className="bg-white-100">
      <div className="bg-red-800">
      <button onClick={handleClick}>Like</button>
      </div>
    </main>
  );
}
