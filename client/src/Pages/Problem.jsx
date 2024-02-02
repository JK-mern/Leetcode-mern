import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import Editor from '@monaco-editor/react';
import night from 'monaco-themes/themes/Night Owl.json'




function Problem() {
  const { title } = useParams();
  const [currentProblem, setCurrentProblem] = useState({});
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState("")

  const handleChange = (value) =>{
    setCode(value)
  }
  
  console.log(code)


  useEffect(() => {
    const problem = async () => {
      const res = await axios.get(`/api/problem/get/${title}`);
      const data = res.data;
      setCurrentProblem(data);
    };
    problem();
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [title]);
  return (
    <main className="max-w-6xl mx-auto my-10 ">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="w-6/12 p-3">
            <h1 className="text-lg  text-slate-50 font-bold">
              {currentProblem.title}
            </h1>
            <p
              className={`my-8  ${
                currentProblem.difficulty === "Easy"
                  ? "text-green-600"
                  : currentProblem.difficulty === "Medium"
                  ? "text-amber-500"
                  : currentProblem.difficulty === "Hard"
                  ? "text-red-500"
                  : ""
              }`}
            >
              <span className="text-gray-400">Difficulty :</span>{" "}
              {currentProblem.difficulty}
            </p>

            <p className="my-8 text-justify">
              <span className="text-gray-400">Description : </span>{" "}
              {currentProblem.description}
            </p>

            <div className="my-8 ">
              <h1 className="text-lg font-extrabold underline text-gray-200">
                Examples{" "}
              </h1>
              {currentProblem.example?.map((ex, index) => (
                <div key={index} className="my-3 ">
                  <h3 className="font-semibold">Example{index + 1}</h3>
                  <p className="mt-2">
                    <span className="text-gray-400">Input{index + 1} : </span>{" "}
                    {ex.input}
                  </p>
                  <p className="mt-2">
                    <span className="text-gray-400">Output{index + 1} : </span>{" "}
                    {ex.output}
                  </p>
                  {ex.explanation && ex.explanation.length > 2 && (
                    <p className="mt-2">
                      <span className="text-gray-400">
                        Explanation{index + 1} :{" "}
                      </span>{" "}
                      {ex.explanation}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-6/12 ">
            <div className="flex justify-between p-3">
              <div className="flex  items-center">
                <label className="text-gray-400 font-bold">Language : </label>
                <select
                  className="select ml-3  pl-7 pr-7 border-slate-500 focus:outline-none focus:border-teal-700  "
                  // onChange=
                >
                  <option value="javascript">javascript</option>
                  <option value="python">python</option>
                  <option value="C++">C++</option>
                </select>
              </div>
              <button className="btn  glass">Submit</button>
            </div>
            <div className="p-3 h-dvh">
              <Editor theme="vs-dark" onChange={handleChange}/ >
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Problem;
