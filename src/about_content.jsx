function AboutContent() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-2 md:p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-8">About Us</h1>
        <p className="text-lg text-black text-justify max-w-prose">
          Welcome to the Campus Club Website, a dynamic platform designed to connect students with various campus clubs. This app allows users to explore a list of clubs, view detailed information including upcoming events, and join clubs with their status persisting in localStorage. Built using a modern tech stack, it leverages React for the frontend framework, React Router for seamless navigation, Tailwind CSS for responsive styling, and Vite as the build tool, all while operating in-browser without a backend.
        </p>
      </div>
    </div>
  );
}

export default AboutContent;