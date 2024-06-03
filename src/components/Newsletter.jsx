import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState(""); // Use a more descriptive name for clarity

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior (optional)

    // Implement your newsletter subscription logic here
    // For example, using a form submission library or sending an API request
    console.log(`Submitted email: ${email}`);

    // Clear the input field after submission (optional)
    setEmail("");
  };

  return (
    <>
      <div className="bg-gradient-to-r from-primary to-secondary flex flex-col items-center p-8 gap-3 rounded-md">
        <h2 className="font-bold text-xl text-center">Stay in the loop</h2>
        <p className="text-sm text-center">
          Join our newsletter to get top news before anyone else.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row items-center gap-3 w-full">
            <input
              className="bg-gray-900 opacity-50 p-2 text-white"
              placeholder="Your email..."
              type="email" // Specify email input type for validation
              name="email"
              value={email}
              onChange={handleChange}
            />
            <button className="bg-white text-primary p-2 text-sm font-semibold hover:bg-primary hover:text-white w-full" type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </>
  );
}
