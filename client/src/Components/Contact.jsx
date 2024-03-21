import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the email using an API or any backend service
    console.log("Form submitted:", formData);
  };

  return (
    <div className="  max-w-5xl  m-5  items-center">
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="p-3 rounded-lg w-full bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            id="name"
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="p-3 w-full rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            id="email"
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="p-3 w-full rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            id="subject"
            type="text"
            placeholder="Subject of your message"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="p-3  w-full rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            id="message"
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="btn btn-wide btn-primary"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
