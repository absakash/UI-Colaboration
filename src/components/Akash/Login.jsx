import React, { useState } from "react";

const Login = () => {
  const [showCode, setShowCode] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const age = form.age.value;
    const email=form.email.value;

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("email :", email);
  };

  // Complete code block for display
  const codeString = `
  <div className="my-10">
      <form onSubmit={handleSubmit}>
        <div className="max-w-6xl mx-auto border p-5 shadow-xl rounded-xl flex flex-col gap-5">
          <p className="text-center text-3xl underline bottom-2">Enter Your Info</p>

          <span className="w-3/4 mx-auto">Your name:</span>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered input-secondary w-3/4 mx-auto"
            name="name"
            required
          />

          <span className="w-3/4 mx-auto">Your age:</span>
          <input
            type="text"
            placeholder="Enter your age"
            className="input input-bordered input-secondary w-3/4 mx-auto"
            name="age"
            required
          />

          <button className="btn btn-outline btn-primary max-w-32 mx-auto">Submit</button>
        </div>
      </form>
    </div>
`;

  // Function to copy code to clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeString);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="my-10 max-w-5xl mx-auto rounded-xl p-5 shadow-xl">
      <div className=" space-x-3 mb-4">
        <button
          className={`btn ${
            !showCode ? "btn-primary" : "btn-outline"
          } border-2 border-primary rounded-lg px-4 py-2`}
          onClick={() => setShowCode(false)}
        >
          Preview
        </button>
        <button
          className={`btn ${
            showCode ? "btn-primary" : "btn-outline"
          } border-2 border-primary rounded-lg px-4 py-2`}
          onClick={() => setShowCode(true)}
        >
          Show Code
        </button>
      </div>

      {!showCode ? (
        <form onSubmit={handleSubmit}>
          <div className="max-w-6xl mx-auto border p-3 shadow-2xl rounded-xl flex flex-col gap-3">
            <p className="text-center font-bold text-3xl underline bottom-2">
              Enter Your Info
            </p>

            <span className="w-3/4 mx-auto">Your name:</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered input-secondary w-3/4 mx-auto"
              name="name"
              required
            />

            <span className="w-3/4 mx-auto">Your age:</span>
            <input
              type="text"
              placeholder="Enter your age"
              className="input input-bordered input-secondary w-3/4 mx-auto"
              name="age"
              required
            />
            <span className="w-3/4 mx-auto">Your Email:</span>
            <input
              type="text"
              placeholder="Enter your Email"
              className="input input-bordered input-secondary w-3/4 mx-auto"
              name="email"
              required
            />

            <button className="btn btn-outline btn-primary max-w-32 mx-auto">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="relative max-w-6xl mx-auto p-5 border rounded-xl shadow-xl">
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto">
            <code>{codeString}</code>
          </pre>
          <button
            className="absolute top-2 right-2 btn btn-sm btn-accent"
            onClick={handleCopyCode}
          >
            Copy Code
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
