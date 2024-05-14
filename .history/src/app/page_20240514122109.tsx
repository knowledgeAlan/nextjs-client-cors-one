import exp from "constants";
import Image from "next/image";

export default function Home() {

  const test = ()=>{

    console.log("Testing=========");
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
