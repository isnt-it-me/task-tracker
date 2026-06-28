import {
    ClipboardList,
    CircleDashed,
    LoaderCircle,
    CheckCircle2,
} from "lucide-react";

const StatsCards = ({ tasks }) => {
    const stats = [
        {
            title: "Total Tasks",
            value: tasks.length,
            icon: ClipboardList,
            bgColor: "bg-indigo-100 dark:bg-indigo-500/20",
            iconColor: "text-indigo-600 dark:text-indigo-400",
        },
        {
            title: "Pending",
            value: tasks.filter((task) => task.status === "Pending").length,
            icon: CircleDashed,
            bgColor: "bg-amber-100 dark:bg-amber-500/20",
            iconColor: "text-amber-600 dark:text-amber-400",
        },
        {
            title: "In Progress",
            value: tasks.filter((task) => task.status === "In Progress").length,
            icon: LoaderCircle,
            bgColor: "bg-sky-100 dark:bg-sky-500/20",
            iconColor: "text-sky-600 dark:text-sky-400",
        },
        {
            title: "Completed",
            value: tasks.filter((task) => task.status === "Completed").length,
            icon: CheckCircle2,
            bgColor: "bg-emerald-100 dark:bg-emerald-500/20",
            iconColor: "text-emerald-600 dark:text-emerald-400",
        },
    ];

    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={stat.title}
                        className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg shadow-indigo-500/5 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-400/30
hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    {stat.title}
                                </p>

                                <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
                                    {stat.value}
                                </h2>
                            </div>

                            <div className={`rounded-2xl p-3 ${stat.bgColor}`}>
                                <Icon
                                    size={24}
                                    className={stat.iconColor}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default StatsCards;