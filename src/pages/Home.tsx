import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";

function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="py-32 min-h-screen bg-gradient-to-b from-primary to-secondary relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={`fixed w-8 h-8 rounded-full bg-white/30 pointer-events-none transition-transform duration-100 z-50 backdrop-blur-sm ${
          isHovering ? "scale-150" : "scale-100"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-white/20">
        <div className="flex flex-col space-y-5">
          <h3 className="text-center text-white/80 text-xs font-semibold tracking-widest mb-1 uppercase">
            Connect
          </h3>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-all p-1.5 rounded-full text-white shadow-md hover:shadow-lg hover:scale-110 group"
            aria-label="GitHub"
          >
            <FaGithub size={18} className="group-hover:animate-pulse" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-all p-1.5 rounded-full text-white shadow-md hover:shadow-lg hover:scale-110 group"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} className="group-hover:animate-pulse" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-all p-1.5 rounded-full text-white shadow-md hover:shadow-lg hover:scale-110 group"
            aria-label="Twitter"
          >
            <FaTwitter size={18} className="group-hover:animate-pulse" />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-all p-1.5 rounded-full text-white shadow-md hover:shadow-lg hover:scale-110 group"
            aria-label="Instagram"
          >
            <FaInstagram size={18} className="group-hover:animate-pulse" />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Profile Section */}
          <div className="mb-14 text-left lg:flex lg:items-center lg:space-x-10">
            <div className="lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <img
                  src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/what-is-a-web-developer.jpg"
                  className="relative w-40 h-40 md:w-44 md:h-44 rounded-full object-cover border-2 border-white shadow-xl"
                  alt="John Doe"
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-4 drop-shadow-lg tracking-tight leading-tight">
                John Doe
              </h1>
              <h2 className="text-2xl text-white/90 mb-6 font-medium pl-1 border-l-4 border-white/40 ">
                Full Stack Developer & UI/UX Enthusiast
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl font-light tracking-wide">
                I craft elegant web solutions with modern technologies. With
                over 5 years of experience in building responsive, user-centered
                applications, I specialize in React, Node.js, and cloud
                infrastructure. Passionate about clean code architecture and
                intuitive user experiences.
              </p>

              <a
                href="/resume.pdf"
                download
                className="bg-white text-primary font-bold px-10 py-3.5 rounded-lg hover:bg-opacity-90 transition-all inline-flex items-center shadow-lg hover:shadow-xl hover:translate-y-[-2px] cursor-none tracking-wide text-sm uppercase"
              >
                Download Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
