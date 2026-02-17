import { useState, useEffect } from 'react';

export function Main() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cubesOpacity = Math.max(0, 1 - scrollY / 500);

    return (
        <div style={{ minHeight: "200vh", background: "#f5f5f5" }}>
            <div style={{
                position: "relative",
                paddingTop: "120px",
                paddingBottom: "100px",
                overflow: "hidden",
                minHeight: "100vh"
            }}>
                <div style={{
                    maxWidth: "1400px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "80px",
                    alignItems: "center",
                    transform: `translateY(${scrollY * 0.3}px)`,
                    transition: "opacity 0.1s"
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
                                <span style={{
                                    padding: "14px 24px",
                                    background: "#FFD43B",
                                    border: "2px solid #000",
                                    borderRight: "none",
                                    fontSize: "17px",
                                    fontWeight: "700",
                                    display: "flex",
                                    alignItems: "center"
                                }}>
                                    Get started
                                </span>
                                <span style={{
                                    padding: "14px",
                                    height: "7vh",
                                    background: "#1a1a1a",
                                    border: "2px solid #000",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,.05) 3px, rgba(255,255,255,.05) 6px)",
                                    fontSize: "22px",
                                    color: "white"
                                }}>
                                    ›
                                </span>
                            </button>
                            <button style={{
                                padding: "14px 28px",
                                background: "white",
                                border: "2px dotted #000",
                                fontSize: "16px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px"
                            }}>
                                npx create-browser-app
                                <span style={{
                                    width: "20px",
                                    height: "20px",
                                    border: "2px dotted #000",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px"
                                }}>⎘</span>
                            </button>
                        </div>
                    </div>

                    {/* Right side - 3D Cubes */}
                    <div style={{
                        position: "relative",
                        height: "500px",
                        opacity: cubesOpacity,
                        transform: `translateY(${scrollY * 0.2}px)`,
                        transition: "opacity 0.1s"
                    }}>

                        {/* // Yellow cube  */}
                        <div style={{
                            position: "absolute",
                            top: "50px",
                            right: "150px",
                            width: "200px",
                            height: "200px",
                            transform: `perspective(1000px) rotateX(${25 + scrollY * 0.05}deg) rotateY(${-45 + scrollY * 0.1}deg)`,
                            transformStyle: "preserve-3d"
                        }}>
                            {/* // FRONT FACE  */}
                            <div style={{
                                position: "absolute",
                                height: "200px",
                                width: "200px",
                                background: "#FFD43B",
                                transform: "translateZ(100px)",
                                fontSize: "60px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }} />

                            {/* // TOP FACE */}
                            <div style={{
                                position: "absolute",
                                height: "200px",
                                width: "200px",
                                background: "#333",
                                transform: "rotateX(90deg) translateZ(100px)",
                            }} />

                            {/* // RIGHT FACE  */}
                            <div style={{
                                position: "absolute",
                                height: "200px",
                                width: "200px",
                                background: "#E6B800",
                                transform: "rotateY(90deg) translateZ(100px)",
                            }} />

                            {/* // BOTTOM FACE */}
                            <div style={{
                                position: "absolute",
                                height: "200px",
                                width: "200px",
                                background: "#B38F00", // slightly darker yellow for depth
                                transform: "rotateX(-90deg) translateZ(100px)",
                            }} />
                        </div>

                        {/* // Red cube  */}
                        <div style={{
                            position: "absolute",
                            bottom: "50px",
                            right: "50px",
                            width: "200px",
                            height: "200px",
                            transform: `perspective(1000px) rotateX(${25 + scrollY * 0.05}deg) rotateY(${-45 + scrollY * 0.1}deg)`,
                            transformStyle: "preserve-3d"
                        }}>
                            {/* Front face */}
                            <div style={{
                                position: "absolute",
                                width: "200px",
                                height: "200px",
                                background: "#FF4D1A",
                                transform: "translateZ(100px)",
                            }} />

                            {/* Top face */}
                            <div style={{
                                position: "absolute",
                                width: "200px",
                                height: "200px",
                                background: "#333",
                                transform: "rotateX(90deg) translateZ(100px)",
                            }} />

                            {/* Right face */}
                            <div style={{
                                position: "absolute",
                                width: "200px",
                                height: "200px",
                                background: "#CC3D15",
                                transform: "rotateY(90deg) translateZ(100px)",
                            }} />

                            {/* Bottom face */}
                            <div style={{
                                position: "absolute",
                                width: "200px",
                                height: "200px",
                                background: "#992E0F", // darker red for depth
                                transform: "rotateX(-90deg) translateZ(100px)",
                            }} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}