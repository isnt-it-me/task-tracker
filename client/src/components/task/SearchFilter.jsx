import { ArrowUpDown, Search } from "lucide-react";

const SearchFilter = ({
    search,
    setSearch,
    status,
    setStatus,
    priority,
    setPriority,
    sortBy,
    setSortBy,
}) => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-indigo-500/5 dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Search & Filter
                </h2>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Search, filter and sort your tasks.
                </p>
            </div>

            <div className="space-y-5">
                {/* Search */}

                <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <Search size={16} />
                        Search
                    </label>

                    <input
                        type="text"
                        placeholder="Search tasks..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                    />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {/* Status */}

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Status
                        </label>

                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                        >
                            <option value="All">All</option>
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                    {/* Priority */}

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Priority
                        </label>

                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                        >
                            <option value="All">All</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                </div>

                {/* Sort */}

                <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <ArrowUpDown size={16} />
                        Sort By
                    </label>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                    >
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                        <option value="priority">Priority</option>
                        <option value="dueDate">Due Date</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SearchFilter;