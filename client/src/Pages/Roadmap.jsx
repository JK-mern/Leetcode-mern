import React, { useState } from "react";
import Accordation from "../Components/Accordation";

function Roadmap() {
  return (
    <div className="max-w-7xl mx-auto   my-5 p-3 ">
      <h1 className="text-left ml-2 text-xl font-bold">
        Recommended Roadmap :{" "}
      </h1> 
      <div className="flex    lg:gap-20 justify-start    flex-wrap">
        <Accordation  id={1} title= "Arrays & Hasing"/>

        <Accordation id={2}   title= "Two Pointers"/>
        <Accordation  id={3}  title= "Stack "/>
        <Accordation  id={4}  title= "Sliding Window"/>
        <Accordation  id={5}  title= "Linked List"/>
        <Accordation  id={6}  title= "Binary Search "/>
        <Accordation  id={6}  title= "Trees "/>
        <Accordation  id={6}  title= "Heap/Priority Queue "/>
        <Accordation  id={6}  title= "Back Tracking "/>
      </div>
    </div>
  );
}

export default Roadmap;

// <div className="max-w-7xl mx-auto   my-5 p-3 ">
//       <h1 className="text-left ml-2 text-xl font-bold">Recommended Roadmap</h1>
//       <div className="flex justify-between  items-center py-3 my-8 rounded-lg bg-neutral-800 w-4/12 ">
//         <div>
//           <p className="text-white ml-6">Array</p>
//         </div>
//         <button className=" mx-5 btn btn-success">&#8964;</button>
//       </div>
//     </div>
