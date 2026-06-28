import { Link } from "react-router-dom";
import { ArrowLeft, TriangleAlert } from "lucide-react";

const NotFound = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 dark:bg-slate-900">
            <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-lg dark:bg-slate-800">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                    <TriangleAlert
                        size={40}
                        className="text-red-500 dark:text-red-400"
                    />
                </div>

                <h1 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                    404
                </h1>

                <h2 className="mt-2 text-xl font-semibold text-slate-800 dark:text-slate-200">
                    Page Not Found
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    The page you're looking for doesn't exist or may have been moved.
                </p>

                <Link
                    to="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
                >
                    <ArrowLeft size={18} />
                    Back to Dashboard
                </Link>
            </div>
        </main>
    );
};

export default NotFound;