import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Problem() {
  const { title } = useParams();
  const [currentProblem, setCurrentProblem] = useState({});

  useEffect(() => {
    const problem = async () => {
      const res = await axios.get(`/api/problem/get/${title}`);
      const data = res.data;
      setCurrentProblem(data);
    };
    problem();
  }, [title]);
  return (
    <main className="max-w-6xl mx-auto my-10 ">
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
          <h1 className="flex justify-center items-center">Code Editor</h1>
        </div>
      </div>
    </main>
  );
}

export default Problem;
