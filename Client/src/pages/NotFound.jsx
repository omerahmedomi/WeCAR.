// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-9xl font-extrabold text-gray-800 dark:text-gray-100">
          404
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-300">
          Oops! Page not found
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/"
            className="rounded-2xl bg-blue-600 px-6 py-3 text-white shadow-md hover:bg-blue-700 transition-all"
          >
            Go Home
          </Link>
        
        </div>
      </motion.div>
    </div>
  );
}
