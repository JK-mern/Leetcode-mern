import React, { useState } from "react";
import Accordation from "../Components/Accordation";

function Roadmap() {
  const arrayQues = [
    "Contains Duplicate",
    "Valid Anagram",
    "Two Sum",
    "Group Anagrams",
    "Top K Frequent Elements",
    "Product of Array Except Self",
    "Valid Sudoko",
    "Longest Consecutive Sequence",
  ];

  const twoPointers = [
    "Valid Palindrome",
    "Two Sum 2 Input Array is Sorted",
    "3Sum",
    "Container With Most Water",
    "Trapping Rain Water",
  ];

  const stack = [
    "	Valid Paranthesis",
    "Min Stack",
    "Evaluate Reverse Polish Notation ",
    "Generate Parentheses",
    "Daily Temperatures",
    "Car Fleet",
    "Largest Rectangle in Histogram",
  ];

  const binarySeach = [
    "Search a 2D Matrix",
    "Koko Eating Bananas",
    "Find Minimum In Rotated Sorted Array",
    "Search In Rotated Sorted Array",
    "Time Based Key Value Store",
    "Median of Two Sorted Arrays",
  ];

  const slidingWindow = [
    "Best Time to Buy and Sell Stock",
    "Longest Substring Without Repeating Characters",
    "Longest Repeating Character Replacement ",
    "Permutation In String",
    "Minimum Window Substring ",
    "Sliding Window Maximum",
  ];

  return (
    <div className="max-w-7xl mx-auto   my-5 p-3 ">
      <h1 className="text-left ml-2 text-xl font-bold">
        Recommended Roadmap :{" "}
      </h1>
      <div className="flex    lg:gap-20 justify-start    flex-wrap">
        <Accordation id={1} title="Arrays & Hasing" questions={arrayQues} />

        <Accordation id={2} title="Two Pointers" questions={twoPointers} />
        <Accordation id={3} title="Stack " questions={stack} />
        <Accordation id={4} title="Binary Search" questions={binarySeach} />
        <Accordation id={4} title="Sliding Window" questions={slidingWindow} />
        {/* <Accordation id={5} title="Linked List"  questions = {slidingWindow}/> */}
        {/* <Accordation id={6} title="Binary Search " />
        <Accordation id={6} title="Trees " />
        <Accordation id={6} title="Heap/Priority Queue " />
        <Accordation id={6} title="Back Tracking " />   */}
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
