export default function Loading({msg = "لطفاً صبر کنید..."}) {
    return (
        <div
            className="fixed size-full inset-0 z-50 flex items-center justify-center bg-main-bg/60 dark:bg-main-bg/90 backdrop-blur-sm"
            role="status"
            aria-live="polite"
        >
            <div className="flex flex-col items-center gap-4">
                {/* Fancy spinner: SVG rotating ring + inner pulse + orbiting dots */}
                <div style={{width: 96, height: 96, position: "relative"}} aria-hidden="true">
                    {/* rotating SVG ring */}
                    <svg
                        viewBox="0 0 100 100"
                        style={{width: "100%", height: "100%", display: "block"}}
                    >
                        <defs>
                            <linearGradient id="g1" x1="0%" x2="100%">
                                <stop offset="10%" stopColor="var(--color-violet-600)"/>
                                <stop offset="50%" stopColor="#06b6d4"/>
                                <stop offset="100%" stopColor="var(--color-violet-600)"/>
                            </linearGradient>
                        </defs>

                        {/* subtle background ring */}
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="rgba(0,0,0,0.06)"
                            strokeWidth="8"
                            fill="none"
                        />

                        {/* animated gradient arc */}
                        <g style={{transformOrigin: "50% 50%", animation: "spin 1.6s linear infinite"}}>
                            <path
                                d="M50 10
                   a40 40 0 0 1 0 80
                   a40 40 0 0 1 0 -80"
                                stroke="url(#g1)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                fill="none"
                                strokeDasharray="120"
                                strokeDashoffset="20"
                                style={{filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.08))"}}
                            />
                        </g>

                        {/* inner decorative small ring rotating in opposite direction */}
                        <g style={{transformOrigin: "50% 50%", animation: "spin-rev 2.8s linear infinite"}}>
                            <circle
                                cx="50"
                                cy="50"
                                r="26"
                                stroke="rgba(124,58,237,0.14)"
                                strokeWidth="4"
                                fill="none"
                                strokeDasharray="10 12"
                            />
                        </g>
                    </svg>

                    {/* Orbiting dots */}
                    <span
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            width: 10,
                            height: 10,
                            marginLeft: -5,
                            marginTop: -50,
                            borderRadius: "50%",
                            background: "#7c3aed",
                            boxShadow: "0 4px 10px rgba(124,58,237,0.35)",
                            animation: "orbit 2.4s linear infinite",
                        }}
                    />
                    <span
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            width: 8,
                            height: 8,
                            marginLeft: -4,
                            marginTop: -50,
                            borderRadius: "50%",
                            background: "#06b6d4",
                            boxShadow: "0 3px 8px rgba(6,182,212,0.28)",
                            transformOrigin: "50% 50%",
                            animation: "orbit 2.4s linear infinite",
                            animationDelay: "0.2s",
                        }}
                    />
                    <span
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            width: 6,
                            height: 6,
                            marginLeft: -3,
                            marginTop: -50,
                            borderRadius: "50%",
                            background: "var(--color-violet-600)",
                            boxShadow: "0 3px 8px rgba(249,115,22,0.28)",
                            transformOrigin: "50% 50%",
                            animation: "orbit 2.4s linear infinite",
                            animationDelay: "0.4s",
                        }}
                    />

                    {/* central pulse */}
                    <div
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            width: 22,
                            height: 22,
                            marginLeft: -11,
                            marginTop: -11,
                            borderRadius: "50%",
                            background: "linear-gradient(180deg,var(--color-violet-600),var(--color-sky-600))",
                            boxShadow: "inset 0 -6px 14px rgba(0,0,0,0.06), 0 6px 18px rgba(2,6,23,0.06)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 10,
                            fontWeight: 700,
                            color: "var(--color-gray-300)",
                            zIndex: 2,
                            animation: "pulse 1.8s ease-in-out infinite",
                        }}
                    >
                        {/* tiny icon/letter inside center — optional visual anchor */}
                        ●
                    </div>
                </div>

                <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                    {msg}
                </p>

                {/* Local style block with keyframes */}
                <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg) }
            100% { transform: rotate(360deg) }
          }
          @keyframes spin-rev {
            0% { transform: rotate(0deg) }
            100% { transform: rotate(-360deg) }
          }
          @keyframes orbit {
            0% { transform: rotate(0deg) translateY(-40px) rotate(0deg); opacity: 1; }
            50% { opacity: 0.7; }
            100% { transform: rotate(360deg) translateY(-40px) rotate(-360deg); opacity: 1; }
          }
          @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 6px 18px rgba(2,6,23,0.06); }
            50% { transform: scale(1.12); box-shadow: 0 14px 34px rgba(2,6,23,0.08); }
            100% { transform: scale(1); box-shadow: 0 6px 18px rgba(2,6,23,0.06); }
          }
          
          /* reduce motion preference */
          @media (prefers-reduced-motion: reduce) {
            .animate, svg, span, div { animation: none !important; transition: none !important; }
          }
        `}</style>
            </div>
        </div>
    );
}
