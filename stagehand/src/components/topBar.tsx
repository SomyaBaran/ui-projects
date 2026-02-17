import { useState } from "react";

export function Topbar() {
    const [isDeployHovered, setIsDeployHovered] = useState(false);
    const [isEvalsHovered, setIsEvalsHovered] = useState(false);
    const [isComputerEvalsHovered, setIsComputerEvalsHovered] = useState(false);
    const [isGithubHovered, setIsGithubHovered] = useState(false);
    const [isDiscordHovered, setIsDiscordHovered] = useState(false);
    const [isDocsHovered, setIsDocsHovered] = useState(false);

    return (
        <div style={{
            width: "90vw",
            height: "9vh",
            border: "2px solid black",
            margin: "0 auto",
            marginTop: "-6px",
            position: "fixed",
            top: 0,                 
            left: "5vw",            
            zIndex: 1000,           
            backgroundColor: "white", 
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            paddingLeft: "40px",
            fontFamily: "'Inter', sans-serif",
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "15px"
            }}>
                <div style={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px"
                }}>
                    <img
                        src="https://i.ibb.co/HLWDb5p9/image.png"
                        alt="stageHandLogo"
                        style={{ height: "60%" }}
                    />
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                }}>
                    <span style={{
                        fontSize: "20px",
                        marginLeft: "-20px",
                        fontWeight: "400",
                        fontFamily: "'Inter', sans-serif"
                    }}>
                        Stagehand
                    </span>
                    <span style={{
                        fontSize: "10px",
                        fontWeight: "300",
                        color: "#666",
                        fontFamily: "'Inter', sans-serif"
                    }}>
                        // by Browserbase
                    </span>
                </div>
            </div>

            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "15px"
            }}>
                {/* Deploy to prod */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "3px 10px",
                        border: "2px dashed black",
                        cursor: "pointer",
                        fontFamily: "'Inter', sans-serif",
                        backgroundColor: isDeployHovered ? "#FCDF8C" : "transparent",
                        transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={() => setIsDeployHovered(true)}
                    onMouseLeave={() => setIsDeployHovered(false)}
                >
                    <span style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "black"
                    }}>
                        Deploy to prod
                    </span>
                    <div style={{
                        width: "28px",
                        height: "28px",
                        backgroundColor: "black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "2px"
                    }}>
                        <span style={{
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "700"
                        }}>
                            B
                        </span>
                    </div>
                </div>

                {/* Evals */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        height: "4.5vh",
                        padding: "0 10px",
                        border: "2px dashed black",
                        cursor: "pointer",
                        fontFamily: "'Inter', sans-serif",
                        backgroundColor: isEvalsHovered ? "#FCDF8C" : "transparent",
                        transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={() => setIsEvalsHovered(true)}
                    onMouseLeave={() => setIsEvalsHovered(false)}
                >
                    <span style={{
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "black"
                    }}>
                        Evals
                    </span>
                    <div style={{
                        width: "1px",
                        height: "30px",
                        borderLeft: "2px dashed black"
                    }}></div>
                    <span style={{
                        fontSize: "24px",
                        fontWeight: "400",
                        color: "black"
                    }}>
                        ›
                    </span>
                </div>

                {/* Computer Use Evals */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        height: "4.5vh",
                        gap: "8px",
                        padding: "3px 10px",
                        border: "2px dashed black",
                        cursor: "pointer",
                        fontFamily: "'Inter', sans-serif",
                        backgroundColor: isComputerEvalsHovered ? "#FCDF8C" : "transparent",
                        transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={() => setIsComputerEvalsHovered(true)}
                    onMouseLeave={() => setIsComputerEvalsHovered(false)}
                >
                    <span style={{
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "black"
                    }}>
                        Computer Use Evals
                    </span>
                    <div style={{
                        width: "1px",
                        height: "30px",
                        borderLeft: "2px dashed black"
                    }}></div>
                    <span style={{
                        fontSize: "24px",
                        fontWeight: "400",
                        color: "black"
                    }}>
                        ›
                    </span>
                </div>

                {/* GitHub */}
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        border: "2px dashed black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        backgroundColor: isGithubHovered ? "#FCDF8C" : "transparent",
                        transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={() => setIsGithubHovered(true)}
                    onMouseLeave={() => setIsGithubHovered(false)}
                >
                    <img
                        src="https://i.postimg.cc/CLXY22vh/Screenshot-2026-02-16-at-8-41-21-PM.png"
                        alt="github icon"
                        style={{
                            width: "30px",
                            height: "30px",
                            objectFit: "contain"
                        }}
                    />
                </div>

                {/* Discord */}
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        border: "2px dashed black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        backgroundColor: isDiscordHovered ? "#FCDF8C" : "transparent",
                        transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={() => setIsDiscordHovered(true)}
                    onMouseLeave={() => setIsDiscordHovered(false)}
                >
                    <img
                        src="https://i.postimg.cc/x8Kfy32h/Screenshot-2026-02-16-at-9-00-51-PM.png"
                        alt="discord icon"
                        style={{
                            width: "30px",
                            height: "30px",
                            objectFit: "contain"
                        }}
                    />
                </div>

                {/* Docs */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        height: "4.5vh",
                        gap: "8px",
                        padding: "3px 10px",
                        border: "2px dashed black",
                        cursor: "pointer",
                        fontFamily: "'Inter', sans-serif",
                        backgroundColor: isDocsHovered ? "#FCDF8C" : "transparent",
                        transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={() => setIsDocsHovered(true)}
                    onMouseLeave={() => setIsDocsHovered(false)}
                >
                    <span style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "black"
                    }}>
                        Docs
                    </span>
                    <div style={{
                        width: "1px",
                        height: "30px",
                        borderLeft: "2px dashed black"
                    }}></div>
                    <span style={{
                        fontSize: "24px",
                        fontWeight: "400",
                        color: "black"
                    }}>
                        ›
                    </span>
                </div>

                <div style={{
                    height: "20px",
                    width: "20px"
                }}>
                </div>
            </div>
        </div>
    )
}