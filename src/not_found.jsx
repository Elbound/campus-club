function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-4">404 - Not Found</h1>
        <p className="text-lg text-gray-600">The page you are looking for does not exist. Go back to <a href="/" className="text-blue-500 hover:underline">Home</a>.</p>
      </div>
    </div>
  );
}

export default NotFound;