import { useEffect, useMemo, useState } from "react";

import Navbar from "../components/layout/Navbar";
import StatsCards from "../components/task/StatsCards";
import TaskForm from "../components/task/TaskForm";
import SearchFilter from "../components/task/SearchFilter";
import TaskList from "../components/task/TaskList";
import Cursor from "../components/ui/Cursor";
import { getTasks } from "../services/taskService";

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const [editingTask, setEditingTask] = useState(null);

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [priority, setPriority] = useState("All");
    const [sortBy, setSortBy] = useState("latest");

    const fetchTasks = async () => {
        try {
            setLoading(true);

            const response = await getTasks();

            setTasks(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const filteredTasks = useMemo(() => {
        let filtered = [...tasks];

        // Search

        if (search.trim()) {
            filtered = filtered.filter(
                (task) =>
                    task.title.toLowerCase().includes(search.toLowerCase()) ||
                    task.description.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Status

        if (status !== "All") {
            filtered = filtered.filter(
                (task) => task.status === status
            );
        }

        // Priority

        if (priority !== "All") {
            filtered = filtered.filter(
                (task) => task.priority === priority
            );
        }

        // Sorting

        switch (sortBy) {
            case "oldest":
                filtered.sort(
                    (a, b) =>
                        new Date(a.createdAt) - new Date(b.createdAt)
                );
                break;

            case "priority": {
                const priorityOrder = {
                    High: 3,
                    Medium: 2,
                    Low: 1,
                };

                filtered.sort(
                    (a, b) =>
                        priorityOrder[b.priority] -
                        priorityOrder[a.priority]
                );

                break;
            }

            case "dueDate":
                filtered.sort(
                    (a, b) =>
                        new Date(a.dueDate || 0) -
                        new Date(b.dueDate || 0)
                );
                break;

            default:
                filtered.sort(
                    (a, b) =>
                        new Date(b.createdAt) -
                        new Date(a.createdAt)
                );
        }

        return filtered;
    }, [tasks, search, status, priority, sortBy]);

    return (
        <div className="min-h-screen bg-slate-50 transition-colors dark:bg-slate-900">
            <Cursor />
            <Navbar />

            <main className="mx-auto max-w-[1450px] px-6 py-10">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
                        Dashboard
                    </h1>

                    <p className="mt-2 text-slate-500 dark:text-slate-400">
                        Stay organized and keep every task under control.
                    </p>
                </div>

                <section className="mb-8">
                    <StatsCards tasks={filteredTasks} />
                </section>

                <section className="mb-8 grid gap-6 lg:grid-cols-3">
                    <TaskForm
                        editingTask={editingTask}
                        setEditingTask={setEditingTask}
                        onTaskSaved={fetchTasks}
                    />

                    <div className="lg:col-span-2">
                        <SearchFilter
                            search={search}
                            setSearch={setSearch}
                            status={status}
                            setStatus={setStatus}
                            priority={priority}
                            setPriority={setPriority}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />
                    </div>
                </section>

                <TaskList
                    tasks={filteredTasks}
                    loading={loading}
                    refreshTasks={fetchTasks}
                    onEdit={setEditingTask}
                />
            </main>
        </div>
    );
};

export default Dashboard;