'use client'
import exp from "constants";
import Image from "next/image";

import { useUnicorns } from "../lib/hooks/unicorn";

import axios from 'axios';


export default function Home() {

  // const { data } = useUnicorns();

  const test = async()=>{
    const {data} = await axios.post('/manage-rest/user/userLogin', {
      firstName:'1212',
      loginPassword:'232dsada'
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log("Testing=========",data);
  }

  function handleClick() {
    console.log("increment like count")
  }
  return (
    <main className="bg-white-100">
      <div className="bg-red-800">
      <button onClick={handleClick}>Like</button>
      </div>
    </main>
  );
}
