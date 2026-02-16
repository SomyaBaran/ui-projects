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

    // Calculate opacity and transforms based on scroll
    const heroOpacity = Math.max(0, 1 - scrollY / 600);
    const cubesOpacity = Math.max(0, 1 - scrollY / 500);
    const linesOpacity = Math.max(0, 1 - scrollY / 400);

    return (
        <div style={{ minHeight: "200vh", background: "#f5f5f5" }}>
            {/* Fixed Navigation */}
            <nav style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                background: "white",
                borderBottom: "1px solid #e5e5e5",
                fontFamily: "'Inter', sans-serif",
            }}>

            </nav>

            {/* Hero Section */}
            <div style={{
                position: "relative",
                paddingTop: "120px",
                paddingBottom: "100px",
                background: "white",
                overflow: "hidden",
                minHeight: "100vh"
            }}>
                <div style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 40px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "80px",
                    alignItems: "center",
                    opacity: heroOpacity,
                    transform: `translateY(${scrollY * 0.3}px)`,
                    transition: "opacity 0.1s"
                }}>
                    {/* Left side - Text */}
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
                                    height: "3vh",
                                    background: "#1a1a1a",
                                    border: "2px solid #000",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,.05) 3px, rgba(255,255,255,.05) 6px)",
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
                        {/* Yellow Cube (Top) */}
                        <div style={{
                            position: "absolute",
                            top: "50px",
                            right: "150px",
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
                                background: "#FFD43B",
                                transform: "translateZ(100px)",
                                border: "2px solid #000",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "60px"
                            }}></div>

                            {/* Top face */}
                            <div style={{
                                position: "absolute",
                                width: "200px",
                                height: "200px",
                                background: "#333",
                                transform: "rotateX(90deg) translateZ(100px)",
                                border: "2px solid #000",
                                backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)"
                            }} />

                            {/* Right face */}
                            <div style={{
                                position: "absolute",
                                width: "200px",
                                height: "200px",
                                background: "#E6B800",
                                transform: "rotateY(90deg) translateZ(100px)",
                                border: "2px solid #000",
                                // backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(0,0,0,.1) 10px, rgba(0,0,0,.1) 20px)"
                            }} />
                        </div>

                        {/* Red/Orange Cube (Bottom) */}
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
                                border: "2px solid #000",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "60px",
                                color: "white",
                                fontWeight: "bold"
                            }}></div>

                            {/* Top face */}
                            <div style={{
                                position: "absolute",
                                width: "200px",
                                height: "200px",
                                background: "#333",
                                transform: "rotateX(90deg) translateZ(100px)",
                                border: "2px solid #000",
                                backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)"
                            }} />

                            {/* Right face */}
                            <div style={{
                                position: "absolute",
                                width: "200px",
                                height: "200px",
                                background: "#CC3D15",
                                transform: "rotateY(90deg) translateZ(100px)",
                                border: "2px solid #000",
                                backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(0,0,0,.1) 10px, rgba(0,0,0,.1) 20px)"
                            }} />

                            {/* Shadow */}
                            <div style={{
                                position: "absolute",
                                width: "280px",
                                height: "280px",
                                background: "radial-gradient(ellipse, rgba(0,0,0,0.3), transparent 70%)",
                                transform: "rotateX(90deg) translateZ(-100px)",
                                left: "-40px",
                                top: "-40px"
                            }} />
                        </div>

                        {/* Dotted Connection Lines */}
                        <svg style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            opacity: linesOpacity,
                            transition: "opacity 0.1s"
                        }}>

                        </svg>
                    </div>
                </div>
            </div>

            {/* Content Below Hero */}

        </div>
    );
}