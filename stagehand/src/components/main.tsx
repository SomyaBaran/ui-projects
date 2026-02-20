import { useState, useEffect } from 'react';

export function Main() {
    const [scrollY, setScrollY] = useState(0);
    const [arrowHovered, setArrowHovered] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText("npx create-browser-app");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{
            width: "90vw",
            margin: "0 auto",
            marginTop: "12vh",
            border: "2px solid black",
            borderTop: "2px solid black",
            backgroundColor: "white",
            backgroundImage:
                `linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
        }}>
            <div style={{
                position: "relative",
                paddingTop: "80px",
                paddingBottom: "80px",
                paddingLeft: "40px",
                paddingRight: "40px",
                overflow: "hidden",
            }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "80px",
                    alignItems: "center",
                }}>

                    <div>
                        <h1 style={{
                            fontSize: "64px",
                            fontWeight: "400",
                            lineHeight: "1.1",
                            marginBottom: "24px",
                            fontFamily: "'Inter', sans-serif",
                        }}>
                            The AI Browser<br />
                            Automation Framework
                        </h1>

                        <p style={{
                            fontSize: "18px",
                            color: "#666",
                            marginBottom: "40px",
                            lineHeight: "1.6",
                            fontFamily: "'Inter', sans-serif",
                            wordSpacing: "-1px"
                        }}>
                            We built an OSS alternative to Playwright that's easier to use and lets AI reliably read and write on the web.
                        </p>

                        <div style={{ display: "flex", gap: "16px" }}>
                            <button style={{
                                padding: "0",
                                width: "fit-content",
                                height: "auto",
                                background: "transparent",
                                border: "none",
                                fontSize: "16px",
                                fontWeight: "700",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "stretch",
                                gap: "0",
                                overflow: "hidden"
                            }}>
                                <span
                                    onClick={() => window.open("https://docs.stagehand.dev/v3/first-steps/introduction", "_blank")}
                                    style={{
                                        padding: "14px 24px",
                                        background: "#FFD43B",
                                        border: "2px solid #000",
                                        borderRight: "none",
                                        fontSize: "17px",
                                        fontWeight: "700",
                                        display: "flex",
                                        alignItems: "center",
                                        cursor: "pointer"
                                    }}
                                >
                                    Get started
                                </span>
                                <span
                                    onMouseEnter={() => setArrowHovered(true)}
                                    onMouseLeave={() => setArrowHovered(false)}
                                    style={{
                                        padding: "14px",
                                        height: "7vh",
                                        background: arrowHovered ? "#CE2003" : "#1a1a1a",
                                        border: "2px solid #000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "22px",
                                        color: "white",
                                        cursor: "pointer",
                                        transition: "background 0.2s ease"
                                    }}
                                >
                                    ›
                                </span>
                            </button>
                            <button style={{
                                padding: "14px 28px",
                                background: "#F9F6F4",
                                border: "2px dotted #000",
                                fontSize: "16px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px"
                            }}>
                                npx create-browser-app
                                <span
                                    onClick={handleCopy}
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        fontSize: "25px",
                                        borderRadius: "10px",
                                        border: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer"
                                    }}
                                >
                                    {copied ? "✓" : (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                        </svg>
                                    )}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right side - 3D Cubes */}
                    <div style={{
                        position: "relative",
                        height: "500px",
                    }}>
                        {/* Yellow cube */}
                        <div style={{
                            position: "absolute",
                            top: "50px",
                            right: "150px",
                            width: "200px",
                            height: "200px",
                            transform: `perspective(1000px) rotateX(${25 + scrollY * 0.05}deg) rotateY(${-45 + scrollY * 0.1}deg)`,
                            transformStyle: "preserve-3d"
                        }}>
                            <div style={{ position: "absolute", height: "200px", width: "200px", background: "#FFD43B", transform: "translateZ(100px)" }} />
                            <div style={{ position: "absolute", height: "200px", width: "200px", background: "#333", transform: "rotateX(90deg) translateZ(100px)" }} />
                            <div style={{ position: "absolute", height: "200px", width: "200px", background: "#E6B800", transform: "rotateY(90deg) translateZ(100px)" }} />
                            <div style={{ position: "absolute", height: "200px", width: "200px", background: "#B38F00", transform: "rotateX(-90deg) translateZ(100px)" }} />
                        </div>

                        {/* Red cube */}
                        <div style={{
                            position: "absolute",
                            bottom: "50px",
                            right: "50px",
                            width: "200px",
                            height: "200px",
                            transform: `perspective(1000px) rotateX(${25 + scrollY * 0.05}deg) rotateY(${-45 + scrollY * 0.1}deg)`,
                            transformStyle: "preserve-3d"
                        }}>
                            <div style={{ position: "absolute", width: "200px", height: "200px", background: "#FF4D1A", transform: "translateZ(100px)" }} />
                            <div style={{ position: "absolute", width: "200px", height: "200px", background: "#333", transform: "rotateX(90deg) translateZ(100px)" }} />
                            <div style={{ position: "absolute", width: "200px", height: "200px", background: "#CC3D15", transform: "rotateY(90deg) translateZ(100px)" }} />
                            <div style={{ position: "absolute", width: "200px", height: "200px", background: "#992E0F", transform: "rotateX(-90deg) translateZ(100px)" }} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}  