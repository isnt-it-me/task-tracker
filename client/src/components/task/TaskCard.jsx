import {
    CalendarDays,
    Clock3,
    Pencil,
    Trash2,
} from "lucide-react";
import { formatDate } from "../../utils/formatDate";

const priorityStyles = {
    High: "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
    Medium:
        "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
    Low: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
};

const statusStyles = {
    Pending:
        "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200",
    "In Progress":
        "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    Completed:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
};

const TaskCard = ({
    task,
    onEdit,
    onDelete,
}) => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
            {/* Header */}

            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {task.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {task.description}
                    </p>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(task)}
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-indigo-100 hover:scale-110 hover:text-indigo-600 dark:hover:bg-slate-700"
                    >
                        <Pencil size={18} />
                    </button>

                    <button
                        onClick={() => onDelete(task)}
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-red-100 hover:text-red-600 dark:hover:bg-slate-700"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>

            {/* Badges */}

            <div className="mt-5 flex flex-wrap gap-3">
                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityStyles[task.priority]
                        }`}
                >
                    {task.priority}
                </span>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[task.status]
                        }`}
                >
                    {task.status}
                </span>
            </div>

            {/* Dates */}

            <div className="mt-6 space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                    <CalendarDays size={16} />

                    <span>
                        Due:{" "}
                        {formatDate(task.dueDate)}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <Clock3 size={16} />

                    <span>
                        Created:{" "}
                        {formatDate(task.createdAt)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;