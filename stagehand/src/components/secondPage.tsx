import { useState } from "react";

export default function SecondPage() {
    const [hoveredLine, setHoveredLine] = useState<number | null>(null);
    const [activeLine, setActiveLine] = useState<number | null>(null);

    const verticalLines = [16, 33, 50, 66, 83];

    return (
        <div
            style={{
                height: "100vh",
                width: "90vw",
                position: "relative",
                marginLeft: "5vw",
            }}
        >
            {verticalLines.map((left, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: `${left}%`,
                        width: "1px",
                        height: "80%",
                        backgroundImage: "repeating-linear-gradient(to bottom, #7d7d7d 0px, #787878 4px, transparent 4px, transparent 8px)",
                        zIndex: 1,
                    }}
                />
            ))}

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    paddingTop: "90px",
                    marginLeft: "7.7vw",
                }}
            >
                <div
                    style={{
                        background: "#ffffff",
                        width: "45%",
                        height: "55vh",
                        border: "2px solid black",
                        borderRight: "none",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "14px",
                            marginTop: "18px",
                            gap: "5px",
                        }}
                    >
                        <div
                            style={{
                                height: "15px",
                                width: "15px",
                                borderRadius: "50%",
                                backgroundColor: "#F03603",
                            }}
                        />
                        <div
                            style={{
                                height: "15px",
                                width: "15px",
                                borderRadius: "50%",
                                backgroundColor: "#FFC83C",
                            }}
                        />
                        <div
                            style={{
                                height: "15px",
                                width: "15px",
                                borderRadius: "50%",
                                backgroundColor: "#4CA8E3",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            marginTop: "5vh",
                        }}
                    >
                        <div
                            style={{
                                padding: "10px",
                                fontFamily: "monospace",
                                marginLeft: "2.5vw",
                                fontSize: "18px",
                                width: "30vw",
                                color:
                                    activeLine === 0
                                        ? "#111"
                                        : hoveredLine === 0
                                            ? "#111"
                                            : "#888",
                                backgroundColor:
                                    activeLine === 0 ? "#e0e0e0" : "transparent",
                                cursor: "pointer",
                            }}
                            onMouseEnter={() => setHoveredLine(0)}
                            onMouseLeave={() => setHoveredLine(null)}
                            onClick={() =>
                                setActiveLine(activeLine === 0 ? null : 0)
                            }
                        >
                            page.goto("browserstore.com/cookies");
                        </div>

                        <div
                            style={{
                                padding: "10px",
                                fontFamily: "monospace",
                                marginLeft: "2.5vw",
                                fontSize: "18px",
                                width: "30vw",
                                color:
                                    activeLine === 1
                                        ? "#111"
                                        : hoveredLine === 1
                                            ? "#111"
                                            : "#888",
                                backgroundColor:
                                    activeLine === 1 ? "#e0e0e0" : "transparent",
                                cursor: "pointer",
                            }}
                            onMouseEnter={() => setHoveredLine(1)}
                            onMouseLeave={() => setHoveredLine(null)}
                            onClick={() =>
                                setActiveLine(activeLine === 1 ? null : 1)
                            }
                        >
                            stagehand.extract("the price of the first cookie");
                        </div>

                        <div
                            style={{
                                padding: "10px",
                                fontFamily: "monospace",
                                marginLeft: "2.5vw",
                                fontSize: "18px",
                                width: "30vw",
                                color:
                                    activeLine === 2
                                        ? "#111"
                                        : hoveredLine === 2
                                            ? "#111"
                                            : "#888",
                                backgroundColor:
                                    activeLine === 2 ? "#e0e0e0" : "transparent",
                                cursor: "pointer",
                            }}
                            onMouseEnter={() => setHoveredLine(2)}
                            onMouseLeave={() => setHoveredLine(null)}
                            onClick={() =>
                                setActiveLine(activeLine === 2 ? null : 2)
                            }
                        >
                            stagehand.act("add the first cookie to cart");
                        </div>

                        <div
                            style={{
                                padding: "10px",
                                fontFamily: "monospace",
                                marginLeft: "2.5vw",
                                fontSize: "18px",
                                width: "30vw",
                                color:
                                    activeLine === 3
                                        ? "#111"
                                        : hoveredLine === 3
                                            ? "#111"
                                            : "#888",
                                backgroundColor:
                                    activeLine === 3 ? "#e0e0e0" : "transparent",
                                cursor: "pointer",
                            }}
                            onMouseEnter={() => setHoveredLine(3)}
                            onMouseLeave={() => setHoveredLine(null)}
                            onClick={() =>
                                setActiveLine(activeLine === 3 ? null : 3)
                            }
                        >
                            agent.execute("complete checkout");
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        background: "#FDECB3",
                        width: "45%",
                        height: "55vh",
                        border: "2px solid black",
                    }}
                >
                    <img
                        src="https://i.postimg.cc/8zLkbs8c/Screenshot-2026-02-19-at-4-09-50-AM.png"
                        alt="Cookies image"
                        style={{
                            width: "25vw",
                            height: "45vh",
                            marginLeft: "90px",
                            marginTop: "77px",
                            borderTopLeftRadius: "5px",
                            borderTopRightRadius: "5px",
                            border: "1px solid black"
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
