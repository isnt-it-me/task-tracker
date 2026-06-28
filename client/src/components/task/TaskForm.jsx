import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import {
    CalendarDays,
    FileText,
    Plus,
    Save,
    Type,
    X,
} from "lucide-react";

import { taskSchema } from "../../schemas/taskSchema";
import { createTask, updateTask } from "../../services/taskService";

const TaskForm = ({
    editingTask,
    setEditingTask,
    onTaskSaved,
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            title: "",
            description: "",
            priority: "Medium",
            status: "Pending",
            dueDate: "",
        },
    });

    useEffect(() => {
        if (editingTask) {
            reset({
                title: editingTask.title,
                description: editingTask.description,
                priority: editingTask.priority,
                status: editingTask.status,
                dueDate: editingTask.dueDate
                    ? editingTask.dueDate.substring(0, 10)
                    : "",
            });
        }
    }, [editingTask, reset]);

    const onSubmit = async (data) => {
        try {
            setIsSubmitting(true);

            if (editingTask) {
                await updateTask(editingTask._id, data);

                toast.success("Task updated successfully!");
            } else {
                await createTask(data);

                toast.success("Task created successfully!");
            }

            reset();

            setEditingTask(null);

            onTaskSaved();
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Something went wrong."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        reset();

        setEditingTask(null);
    };

    return (
        <div
            id="task-form"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-indigo-500/5 dark:border-slate-700 dark:bg-slate-800"
        >
            <div className="mb-4">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {editingTask ? "Edit Task" : "Create Task"}
                </h2>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {editingTask
                        ? "Update the selected task."
                        : "Add a new task to your tracker."}
                </p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <Type size={16} />
                        Title
                    </label>

                    <input
                        {...register("title")}
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                    />

                    {errors.title && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.title.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <FileText size={16} />
                        Description
                    </label>

                    <textarea
                        rows={2}
                        {...register("description")}
                        className="w-full resize-none rounded-xl border border-slate-300 px-4 py-2.5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                    />

                    {errors.description && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.description.message}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Priority
                        </label>

                        <select
                            {...register("priority")}
                            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Status
                        </label>

                        <select
                            {...register("status")}
                            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                        >
                            <option>Pending</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <CalendarDays size={16} />
                        Due Date
                    </label>

                    <input
                        type="date"
                        {...register("dueDate")}
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                    />
                </div>

                <div className="flex gap-3">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 rounded-xl bg-indigo-600 px-4 py-2.5 font-medium text-white transition hover:bg-indigo-700 disabled:opacity-60"
                    >
                        <span className="flex items-center justify-center gap-2">
                            {editingTask ? <Save size={18} /> : <Plus size={18} />}
                            {isSubmitting
                                ? editingTask
                                    ? "Updating..."
                                    : "Creating..."
                                : editingTask
                                    ? "Update Task"
                                    : "Create Task"}
                        </span>
                    </button>

                    {editingTask && (
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="rounded-xl border border-slate-300 px-4 py-2.5 transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
                        >
                            <X size={18} />
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default TaskForm;