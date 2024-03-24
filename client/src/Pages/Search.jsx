import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function Search() {
  const { pattern } = useParams();
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skipValue, setSkipValue] = useState(0);
  useEffect(() => {
    async function FindProblems() {
      let results = await axios.get("/api/problem/search", {
        params: {
          pattern: pattern,
        },
      });
      setProblems(results.data);
      setTimeout(() => {
        setLoading(false);
      }, 600);
    }
    FindProblems();
  }, [problems]);

  const handleNext  = ()=>{
   
      setSkipValue(skipValue + 10);

    
  }

  const handlePrev = ()=>{
 setSkipValue ( Math.max (0, skipValue -10))
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto my-10">
        {loading ? (
          <Loader />
        ) : (
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Title</th>
                  <th>Difficulty Level</th>
                </tr>
              </thead>
              <tbody>
                {problems.length >= 1 &&
                  problems.map((problem, index) => (
                    <tr key={index}>
                      <th>{skipValue + index + 1}</th>

                      <td className="cursor-pointer hover:underline">
                        <Link to={`/problems/${problem.title}`}>
                          {problem.title}
                        </Link>
                      </td>
                      <td
                        className={
                          problem.difficulty === "Easy"
                            ? "text-green-600"
                            : problem.difficulty === "Medium"
                            ? "text-amber-500"
                            : problem.difficulty === "Hard"
                            ? "text-red-500"
                            : ""
                        }
                      >
                        {problem.difficulty}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="flex flex-row my-6 justify-center gap-4  ">
              <button
                className="btn btn-active btn-ghost"
                disabled={skipValue === 0}
                onClick={handlePrev}
              >
                prev
              </button>
              <button
                className="btn btn-active btn-ghost "
                disabled={problems.length < 10}
                onClick={handleNext}
              >
                next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
