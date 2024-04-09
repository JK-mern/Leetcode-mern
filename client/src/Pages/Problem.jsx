import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import Editor, { useMonaco } from "@monaco-editor/react";
import nightOwl from "monaco-themes/themes/Night Owl.json";
import { languageOptions } from "../constants/languageOption.js";
import Output from "../Components/Output.jsx";
import Toast from "../Components/Toast.jsx";
import { toast } from "react-toastify";

function Problem() {
  const monaco = useMonaco();

  const { title } = useParams();
  const [currentProblem, setCurrentProblem] = useState({});
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [compileloading, setCompileLoading] = useState(false);
  const [language, setLanguage] = useState(languageOptions[0]);
  const [output, setOutput] = useState(null);

  const handleChange = (value) => {
    setCode(value);
  };

  const handleCompile = async () => {
    setCompileLoading(true);
    const formData = {
      language_id: language.id,
      source_code: btoa(code),
    };
    try {
      const res = await axios.post(
        ` ${import.meta.env.VITE_RAPID_API_URL}`,
        formData,
        {
          params: {
            base64_encoded: "true",
            fields: "*",
          },
          headers: {
            "content-type": "application/json",
            "Content-Type": "application/json",
            "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
            "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
          },
        }
      );
      const token = res.data.token;
      checkStatus(token);
    } catch (error) {
      console.log(error);
    }
  };

  const checkStatus = async (token) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_RAPID_API_URL}/${token}`,
        {
          params: {
            base64_encoded: "true",
            fields: "*",
          },
          headers: {
            "content-type": "application/json",
            "Content-Type": "application/json",
            "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
            "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
          },
        }
      );
      let statusId = res.data.status?.id;
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        const data = res.data;

        toast.success(`Compiled Successfully!`);
        setOutput(data);
        setCompileLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLanguage = (e) => {
    const selectedId = parseInt(e.target.value);
    const selectedLanguage = languageOptions.find(
      (language) => language.id === selectedId
    );
    setLanguage(selectedLanguage);
  };

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("nightOwl", nightOwl);
      monaco.editor.setTheme("nightOwl");
    }
  }, [monaco]);

  useEffect(() => {
    setLoading(true);
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

  console.log(currentProblem)
  useEffect(() => {
    const fetchData = async () => {
      if (currentProblem && currentProblem._id && language.value) {
        try {
          const result = await axios.get(
            `/api/submit/getSolution/${currentProblem._id}/${language.value}`
          );

          if (monaco && monaco.editor.getModels().length > 0) {
            monaco.editor.getModels()[0].setValue(result.data);
          }
        } catch (error) {
          console.error("Error fetching user code:", error);
        }
      }
    };

    fetchData();
  }, [language, currentProblem, monaco]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      questionId: currentProblem._id,
      lang: language.value,
      code: code,
    };
    try {
      const result = await axios.post("/api/submit/submitSolution", formData);
      const data = result.data;
      toast.success(data);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <main className="max-w-6xl mx-auto my-10 ">
      <Toast />
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className=" md:w-6/12 p-3">
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
                  <h3 className="font-semibold">Example {index + 1}</h3>
                  <p className="mt-2">
                    <span className="text-gray-400">Input {index + 1} : </span>{" "}
                    {ex.input}
                  </p>
                  <p className="mt-2">
                    <span className="text-gray-400">Output {index + 1} : </span>{" "}
                    {ex.output}
                  </p>
                  {ex.explanation && ex.explanation.length > 2 && (
                    <p className="mt-2">
                      <span className="text-gray-400">
                        Explanation {index + 1} :{" "}
                      </span>{" "}
                      {ex.explanation}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div>
              {currentProblem?.followUp && (<p>Follow Up : {currentProblem.followUp}</p>)}
            </div>
          </div>
          <div className=" md:w-6/12 ">
            <div className="flex  flex-col md:flex-row gap-5 md:gap-0 md:justify-between p-3">
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
              <div className=" md:ml-4  ">
                <button
                  className="btn  bg-red-900 w-full disabled:opacity-15 "
                  onClick={handleCompile}
                  disabled={compileloading || code.length ===0}
                >
                  Run
                </button>
              </div>
              <div>
                <button
                  className="btn  bg-green-600 w-full"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="p-3 h-72  md:h-3/5">
              <Editor
                theme="nightOwl"
                onChange={handleChange}
                language={language.value}
              />
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
