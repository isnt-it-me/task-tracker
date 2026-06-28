import { CheckSquare, Moon, Sun, ExternalLink } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 px-6 pt-5">  <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-slate-200/70 bg-white/80 px-6 shadow-lg backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/70">        <div className="flex items-center gap-3">
            <div className="rounded-xl bg-indigo-600 p-2 text-white">
                <CheckSquare size={20} />
            </div>

            <div>
                <h1 className="text-lg font-bold text-slate-900 dark:text-white">
                    Task Tracker
                </h1>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                    Manage your daily tasks
                </p>
            </div>
        </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={toggleTheme}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                    aria-label="Toggle Theme"
                >
                    {theme === "light" ? (
                        <Moon
                            size={18}
                            className="text-slate-700 dark:text-slate-200"
                        />
                    ) : (
                        <Sun
                            size={18}
                            className="text-slate-700 dark:text-slate-200"
                        />
                    )}
                </button>

                <a
                    href="https://www.colledgeconnect.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                    aria-label="Link"
                >
                    <ExternalLink
                        size={18}
                        className="text-slate-700 dark:text-slate-200"
                    />
                </a>
            </div>
        </div>
        </header>
    );
};

export default Navbar;