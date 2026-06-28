import { toast } from "react-toastify";

import Loader from "../ui/Loader";
import EmptyState from "../ui/EmptyState";
import TaskCard from "./TaskCard";

import { deleteTask } from "../../services/taskService";

const TaskList = ({
    tasks,
    loading,
    refreshTasks,
    onEdit,
}) => {
    const handleEdit = (task) => {
        onEdit(task);
    };
    const handleDelete = async (task) => {
        const confirmDelete = window.confirm(
            `Delete "${task.title}"?\n\nThis action cannot be undone.`
        );

        if (!confirmDelete) return;

        try {
            await deleteTask(task._id);

            toast.success("Task deleted successfully!");

            refreshTasks();
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Failed to delete task."
            );
        }
    };

    if (loading) {
        return <Loader />;
    }

    if (!tasks.length) {
        return <EmptyState />;
    }

    return (
        <div className="space-y-5">
            {tasks.map((task) => (
                <TaskCard
                    key={task._id}
                    task={task}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default TaskList;