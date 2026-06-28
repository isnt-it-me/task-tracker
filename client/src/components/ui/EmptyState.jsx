import { ClipboardList, Plus } from "lucide-react";

const EmptyState = () => {
    const scrollToForm = () => {
        const form = document.getElementById("task-form");

        if (form) {
            form.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-500/20">
                <ClipboardList
                    size={36}
                    className="text-indigo-600 dark:text-indigo-400"
                />
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">
                No Tasks Yet
            </h2>

            <p className="mx-auto mt-3 max-w-md text-slate-500 dark:text-slate-400">
                You haven't created any tasks yet. Start by creating your first task to
                organize your work.
            </p>

            <button
                onClick={scrollToForm}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
                <Plus size={18} />
                Create Your First Task
            </button>
        </div>
    );
};

export default EmptyState;