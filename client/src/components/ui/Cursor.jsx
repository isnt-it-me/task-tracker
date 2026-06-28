import { useEffect, useState } from "react";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", moveCursor);

        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <>
            {/* Outer Ring */}
            <div
                className="pointer-events-none fixed z-[9999] hidden h-8 w-8 rounded-full border border-violet-500/80 shadow-[0_0_12px_rgba(139,92,246,0.35)] lg:block"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: "translate(-50%, -50%)",
                    transition: "left 120ms ease-out, top 120ms ease-out",
                }}
            />

            {/* Inner Dot */}
            <div
                className="pointer-events-none fixed z-[10000] hidden h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.9)] lg:block"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: "translate(-50%, -50%)",
                }}
            />
        </>
    );
};

export default Cursor;