export default function SecondPage() {
    const verticalLines = [16, 33, 50, 66, 83];

    return (
        <div style={{
            height: "100vh",
            width: "90vw",
            position: "relative",
            marginLeft: "5vw",
        }}>

            {verticalLines.map((left, i) => (
                <div key={i} style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: `${left}%`,
                    width: "1px",
                    backgroundImage: "repeating-linear-gradient(to bottom, #aaa 0px, #aaa 8px, transparent 8px, transparent 16px)",
                    zIndex: 1,
                }} />
            ))}

            <div style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                paddingTop: "90px",
                marginLeft: "7.7vw",
            }}>
                <div style={{
                    background: "#ffffff",
                    width: "45%",
                    height: "55vh",
                    border: "2px solid black",
                    borderRight: "none"
                }}>
                    {/* // dots div */}
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "14px",
                        marginTop: "18px",
                        gap: "5px"
                    }}>
                        {/* // red dot */}
                        <div style={{
                            height: "15px",
                            width: "15px",
                            borderRadius: "50%",
                            backgroundColor: "#F03603",
                        }}>
                        </div>
                        {/* // yellow dot */}
                        <div style={{
                            height: "15px",
                            width: "15px",
                            borderRadius: "50%",
                            backgroundColor: "#FFC83C",
                        }}>
                        </div>
                        {/* // blue dot */}
                        <div style={{
                            height: "15px",
                            width: "15px",
                            borderRadius: "50%",
                            backgroundColor: "#4CA8E3",
                        }}>
                        </div>
                    </div>
                </div>
                <div style={{
                    background: "#ffffff",
                    width: "45%",
                    height: "55vh",
                    border: "2px solid black"
                }} />
            </div>
        </div>
    )
}