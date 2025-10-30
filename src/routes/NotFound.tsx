import { Link } from "react-router";

function NotFound() {
  return (
    <main className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-9xl font-bold text-error"><span className="text-secondary">4</span><span className="text-accent">0</span><span>4</span></h1>
      <p className="text-2xl font-semibold md:text-3xl">
        Wait wait Where are you going? .
      </p>
      <p className="mt-4 mb-8 text-gray-500">
        But dont worry, you can find plenty of other things on our homepage.
      </p>
      <Link
        to="/"
        className="px-8 py-3 font-semibold bg-secondary text-base-100 c-shadow-error"
      >
        Back to homepage
      </Link>
    </main>
  );
}

export default NotFound;