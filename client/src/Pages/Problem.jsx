import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import Editor, { useMonaco } from "@monaco-editor/react";
import nightOwl from "monaco-themes/themes/Night Owl.json";
import { languageOptions } from "../constants/languageOption.js";
import Output from "../Components/Output.jsx";

function Problem() {
  const monaco = useMonaco();

  const { title } = useParams();
  const [currentProblem, setCurrentProblem] = useState({});
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState(languageOptions[0]);
  const [output, setOutput] = useState("This is  a sample output");

  const handleChange = (value) => {
    setCode(value);
  };

  const handleLanguage = (e) => {
    const selectedId = parseInt(e.target.value);
    const selectedLanguage = languageOptions.find(
      (language) => language.id === selectedId
    );
    setLanguage(selectedLanguage)
  };



  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("nightOwl", nightOwl);
      monaco.editor.setTheme("nightOwl");
    }
  }, [monaco]);

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
                  className="select ml-3 pl-7 pr-7 border-slate-500 focus:outline-none focus:border-teal-700"
                  onChange={handleLanguage}
                >
                  {languageOptions.map((language) => (
                    <option key={language.id} value={language.id}>
                      {language.name}
                    </option>
                  ))}
                </select>
              </div>
              <button className="btn  glass">Submit</button>
            </div>
            <div className="p-3 h-3/5">
              <Editor theme="nightOwl" onChange={handleChange} language={language.value} />
              <div className="mt-5">
                <h3 className="font-semibold text-lg my-3 pl-3">Output</h3>
                <Output output={output} />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Problem;
