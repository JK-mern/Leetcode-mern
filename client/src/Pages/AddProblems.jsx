import { useState } from "react";

const AddProblems = () => {
  const [exampleNo, setExampleNo] = useState(1);
  const setExampleState = (e) => {
    setExampleNo(+e.target.value);
  };
  return (
    <main className="max-w-4xl  mx-auto  my-6 ">
      <div className=" text-center p-3 ">
        <h1
          className=" font-serif font-bold text-3xl text-transparent bg-clip-text 
        bg-gradient-to-r from-teal-600  to-yellow-500 "
        >
          Add Problems
        </h1>
        <form className="flex flex-col  gap-10  p-3 mt-7 ">
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
          />
          <div className="text-center items-center flex ">
            <label className="font-bold ">Difficulty:</label>
            <select className="select ml-3  px-7 border-slate-500 focus:outline-none focus:border-teal-700  w-full">
              <option value='Easy'>Easy</option>
              <option value='Medium'>Medium</option>
              <option value='Hard'>Hard</option>
            </select>
          </div>
          <textarea
            className="textarea textarea-bordered focus:outline-none focus:border-teal-700"
            placeholder="Write the problem Description"
            id="de"
            rows="6"
          ></textarea>

          <div className="text-center items-center flex ">
            <label className="font-bold ">
              No of Examples :{" "}
            </label>
            <select
              className="select ml-3  px-7 border-slate-500 focus:outline-none focus:border-teal-700 w-full w-full"
              onClick={setExampleState}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div>
            {[...Array(exampleNo)].map((_, index) => (
              <div key={index + 1}>
                <h3 className="text-left text-base p-5  ">
                  Example {index + 1}
                </h3>
                <div className="flex gap-3 flex-col">
                  <input
                    type="text"
                    id="input"
                    placeholder="input"
                    className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="output"
                    className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="explanation"
                    className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
                  />
                </div>
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Follow-Up"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
          />
          <button type="button" className="bg-teal-700 p-3 rounded-xl hover:opacity-70 uppercase" >Submit </button>
        </form>
      </div>
    </main>
  );
};

export default AddProblems;
