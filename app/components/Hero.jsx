// app/components/Hero.tsx
export default function Hero() {
    return (
      <section className="flex items-center justify-center h-screen bg-gray-100 text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm Daniel Tigistu
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            I'm a passionate software developer with experience in building web applications.
          </p>
          <a
            href="/path/to/your/resume.pdf" // Replace with your resume link
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </section>
    );
  }
  