import React from "react";

function Contact() {
  return (
    <div className="bg-gradient-to-r from-black to-purple-900 text-white min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-6xl font-extrabold mb-12">Contact Me</h1>

        <div className="w-full max-w-md space-y-8 text-xl self-center px-8">
          <div className="flex flex-col space-y-2">
            <span className="text-2xl text-purple-300">Name</span>
            <span className="text-xl">John Doe</span>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="text-2xl text-purple-300">Email</span>
            <span className="text-xl">john.doe@example.com</span>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="text-2xl text-purple-300">Message</span>
            <span className="text-xl">********</span>
          </div>
          <footer className="mt-auto py-4 text-center text-sm text-gray-400">
            © 2024 All rights reserved
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Contact;
