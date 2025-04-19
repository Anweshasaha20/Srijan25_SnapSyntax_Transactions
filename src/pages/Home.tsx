import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <div className="py-40 min-h-screen bg-gradient-to-b from-primary to-secondary">
      {/* Main content without explicit navbar and adjusted padding */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section - Left aligned text but centered container */}
          <div className="mb-10 text-left lg:flex lg:items-center lg:space-x-8">
            <div className="lg:w-1/3 flex justify-center lg:justify-start mb-6 lg:mb-0">
              <img
                src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/what-is-a-web-developer.jpg"
                className="w-36 h-36 rounded-full object-cover border-4 border-primary-foreground shadow-lg"
              />
            </div>
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold text-primary-foreground mb-2">
                John Doe
              </h1>
              <h2 className="text-xl text-primary-foreground/90 mb-6">
                Software Developer
              </h2>
              <p className="text-primary-foreground/80">
                A passionate developer specializing in web technologies and
                application development. I create efficient, user-friendly
                solutions with clean code and modern best practices.
              </p>
            </div>
          </div>

          {/* Social Links - Centered */}
          <div className="flex justify-center space-x-6 mb-10">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors p-3 rounded-full text-primary-foreground"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors p-3 rounded-full text-primary-foreground"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors p-3 rounded-full text-primary-foreground"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors p-3 rounded-full text-primary-foreground"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* CV Download Button - Right aligned */}
          <div className="flex justify-end">
            <a
              href="/resume.pdf"
              download
              className="bg-primary-foreground text-primary font-medium px-8 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors inline-flex items-center shadow-md"
            >
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
