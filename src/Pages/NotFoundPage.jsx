
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 text-black">
      <div className="text-center p-8 space-y-6 max-w-md mx-auto">
        <div className="text-8xl font-extrabold text-red-600 tracking-widest">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-black tracking-tight">
          Page Not Found
        </h1>
        <p className="text-gray-600">
          You seem to have taken a wrong turn. The page you&apos;re looking for is in an uncharted zone.
        </p>
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-6 py-2 rounded bg-blue-500 hover:bg-blue-700 text-gray-100 font-medium tracking-wide"
        >
          Return to Previous Page
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
