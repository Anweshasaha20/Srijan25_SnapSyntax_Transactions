import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    // Form submission logic would go here
  };

  return (
    <div className="my-10 bg-gradient-to-b from-primary to-secondary">
        <h1 className="text-6xl font-extrabold mb-12 text-primary">
          Contact Me
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-8 text-xl self-center px-8 bg-secondary bg-opacity-10 p-8 rounded-lg backdrop-blur-sm"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-2xl text-accent">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border rounded-md bg-primary bg-opacity-90 text-secondary"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-2xl text-accent">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded-md bg-primary bg-opacity-90 text-secondary"
              placeholder="john.doe@example.com"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-2xl text-accent">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 border rounded-md bg-primary bg-opacity-90 text-secondary h-32"
              placeholder="Your message here..."
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full py-2 px-4 bg-accent hover:bg-primary text-secondary font-bold rounded-md transition"
          >
            Submit
          </button>

          <footer className="mt-auto py-4 text-center text-sm text-accent">
            © 2024 All rights reserved
          </footer>
        </form>
      </div>
  );
}

export default Contact;
