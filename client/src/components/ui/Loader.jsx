import { LoaderCircle } from "lucide-react";

const Loader = ({ message = "Loading tasks..." }) => {
    return (
        <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <LoaderCircle
                size={42}
                className="animate-spin text-indigo-600 dark:text-indigo-400"
            />

            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {message}
            </p>
        </div>
    );
};

export default Loader;