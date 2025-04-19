import { Input } from "@/components/ui/input";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log({ name, email, message });
      setSubmitStatus("success");
      // Optionally clear form after success
      // setName(""); setEmail(""); setMessage("");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 mt-10 px-4 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Contact header section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-accent/90 font-medium max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out
            using the form below.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          {/* Contact info */}
          <div className="w-full lg:w-1/3 bg-secondary bg-opacity-80 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-accent/20">
            <h3 className="text-2xl font-bold text-accent mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-accent p-2 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-accent text-lg">
                    Location
                  </h4>
                  <p className="text-accent font-medium">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-accent p-2 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-accent text-lg">Email</h4>
                  <p className="text-accent font-medium">
                    <a
                      href="mailto:contact@example.com"
                      className="hover:underline transition-all"
                    >
                      contact@example.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-accent p-2 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-accent text-lg">Phone</h4>
                  <p className="text-accent font-medium">
                    <a
                      href="tel:+11234567890"
                      className="hover:underline transition-all"
                    >
                      +1 (123) 456-7890
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-2/3 space-y-6 bg-secondary bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-blur-sm"
          >
            <h2 className="text-3xl text-accent font-bold mb-6">
              Send a Message
            </h2>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md mb-4">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md mb-4">
                There was a problem sending your message. Please try again.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-xl text-accent font-semibold"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 border-2 border-accent/40 rounded-md bg-primary bg-opacity-95 text-accent font-medium focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-accent/70"
                  placeholder="John Doe"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-xl text-accent font-semibold"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 border-2 border-accent/40 rounded-md bg-primary bg-opacity-95 text-accent font-medium focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-accent/70"
                  placeholder="john.doe@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="message"
                className="text-xl text-accent font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-3 border-2 border-accent/40 rounded-md bg-primary bg-opacity-95 text-accent font-medium h-32 focus:outline-none focus:ring-2 focus:ring-accent resize-none placeholder:text-accent/70"
                placeholder="Your message here..."
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-6 w-full py-3 px-4 bg-accent hover:bg-primary text-secondary font-bold rounded-md transition-colors duration-300 shadow-md flex justify-center items-center ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>

        <footer className="mt-16 text-center text-sm text-accent">
          © 2024 All rights reserved
        </footer>
      </div>
    </div>
  );
}

export default Contact;
