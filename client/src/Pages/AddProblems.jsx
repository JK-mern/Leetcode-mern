import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Toast from '../Components/Toast'
const AddProblems = () => {
  const [exampleNo, setExampleNo] = useState(1);

  const [formData, setFormData] = useState({
    title: "",
    difficulty: "Easy",
    description: "",
    example: Array.from({ length: 1 }, () => ({
      input: "",
      output: "",
      explanation: "",
    })),
    followUp: "",
  });

  const setExampleState = (e) => {
    setExampleNo(+e.target.value);
    const count = +e.target.value;
    const example = [...formData.example];

    if (count > example.length) {
      for (let i = example.length; i < count; i++) {
        example.push({ input: "", output: "", explanation: "" });
      }
    } else if (count < example.length) {
      example.splice(count);
    }

    setFormData({ ...formData, example: example });
  };

  const handleChange = (e, index) => {
    if (
      e.target.id === "input" ||
      e.target.id === "output" ||
      e.target.id === "explanation"
    ) {
      const { id, value } = e.target;
      const newExample = [...formData.example];
      newExample[index][id] = value;
      setFormData({ ...formData, example: newExample });
    } else setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      const res =  await axios.post('/api/problem/addproblems',formData,{
        headers : {
          'Content-Type' : 'application/json'
        }
      })
      const data = res.data
      toast.success("Problem Added Successfully")
    } catch (error) {
      const data = error.response.data
      toast.error(data.message)
    }
  }

  return (
    <main className="max-w-4xl  mx-auto  my-6 ">
      <div className=" text-center p-3 ">
        <h1
          className=" font-serif font-bold text-3xl text-transparent bg-clip-text 
        bg-gradient-to-r from-teal-600  to-yellow-500 "
        >
          Add Problems
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col  gap-10  p-3 mt-7 ">
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            onChange={handleChange}
            required
          />
          <div className="text-center items-center flex ">
            <label className="font-bold ">Difficulty:</label>
            <select
              className="select ml-3  px-7 border-slate-500 focus:outline-none focus:border-teal-700  w-full "
              onChange={handleChange}
              id="difficulty"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <textarea
            className="textarea textarea-bordered focus:outline-none focus:border-teal-700"
            placeholder="Write the problem Description"
            id="description"
            rows="6"
            onChange={handleChange}
            required
          ></textarea>

          <div className="text-center items-center flex ">
            <label className="font-bold ">No of Examples : </label>
            <select
              className="select ml-3  px-7 border-slate-500 focus:outline-none focus:border-teal-700  w-full"
              onChange={setExampleState}
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
                    onChange={(e) => handleChange(e, index)}
                  />
                  <input
                    type="text"
                    placeholder="output"
                    className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
                    onChange={(e) => handleChange(e, index)}
                    id="output"
                  />
                  <input
                    type="text"
                    placeholder="explanation"
                    className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
                    onChange={(e) => handleChange(e, index)}
                    id="explanation"
                  />
                </div>
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Follow-Up"
            id="followUp"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Tag"
            id="tags"
            className="p-3 lowercase rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            onChange={handleChange}
            
          />
          <button
            className="bg-teal-700 p-3 rounded-xl hover:opacity-70 uppercase"
          >
            Submit{" "}
          </button>
        </form>
      </div>
      <Toast />
    </main>
  );
};

export default AddProblems;
