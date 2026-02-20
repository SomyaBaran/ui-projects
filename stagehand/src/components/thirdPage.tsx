export default function ThirdPage() {
    return (
        <div style={{
            height: "100vh",
            width: "90vw",
            position: "relative",
            marginLeft: "5vw",
            border: "2px solid black",
            marginTop: "-20vh",
            backgroundColor: "#FFE29E",
            overflow: "hidden",
        }}>
            <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cline x1='0' y1='8' x2='8' y2='0' stroke='%23c8860a' stroke-width='0.8' stroke-opacity='0.35'/%3E%3Cline x1='-2' y1='2' x2='2' y2='-2' stroke='%23c8860a' stroke-width='0.8' stroke-opacity='0.35'/%3E%3Cline x1='6' y1='10' x2='10' y2='6' stroke='%23c8860a' stroke-width='0.8' stroke-opacity='0.35'/%3E%3C/svg%3E")`,
            }} />

            <div style={{
                position: "absolute",
                border: "2px solid black",
                height: "25vh",
                width: "40vw",
                backgroundColor: "white",
                borderTop: "none",
                borderLeft: "none",
                fontSize: "50px",
                fontWeight: "300",
                paddingLeft: "85px",
                paddingTop: "20px",
                lineHeight: "1"
            }}>
                Automate anything <br />
                in the browser, <br />
                reliably
            </div>

            <div style={{
                position: "absolute",
                left: "calc(40vw - 2px)",
                zIndex: 1,
                width: "64px",
                height: "48px",
                backgroundColor: "white",
                borderRight: "2px solid black",
                borderBottom: "2px solid black",
            }} />

            <div style={{
                position: "absolute",
                top: "calc(25vh - 2px)",
                zIndex: 1,
                width: "78px",
                height: "55px",
                backgroundColor: "white",
                borderRight: "2px solid black",
                borderLeft: "none",
                borderBottom: "2px solid black"
            }} />


            <div style={{
                position: "absolute",
                top: "44.5vh",
                left: "5vw",
                display: "flex",
                alignItems: "flex-end",
                zIndex: 2,
            }}>
                {/* // research tab */}
                <div style={{
                    height: "8vh",
                    width: "19vw",
                    border: "2px solid black",
                    borderBottom: "none",
                    marginTop: "16px",
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    padding: "16px 36px",
                    fontSize: "27px",
                    fontWeight: "400",
                }}>
                    Research agent
                </div>

                {/* // pink triangle */}
                <div style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#f9a8c9",
                    transform: "rotate(180deg)",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                    // borderBottom: "2px solid black"
                }}>
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cline x1='0' y1='8' x2='8' y2='0' stroke='%23c8860a' stroke-width='0.8' stroke-opacity='0.35'/%3E%3Cline x1='-2' y1='2' x2='2' y2='-2' stroke='%23c8860a' stroke-width='0.8' stroke-opacity='0.35'/%3E%3Cline x1='6' y1='10' x2='10' y2='6' stroke='%23c8860a' stroke-width='0.8' stroke-opacity='0.35'/%3E%3C/svg%3E")`,
                    }} />
                </div>

                {/* // Task agent  */}
                <div style={{
                    height: "8vh",
                    width: "19vw",
                    border: "2px dashed black",
                    borderBottom: "2px solid black",
                    marginTop: "16px",
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    padding: "16px 36px",
                    fontSize: "27px",
                    fontWeight: "400",
                }}>
                </div>

                <div style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#eb734f",
                    transform: "rotate(180deg)",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                }}>
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cline x1='0' y1='8' x2='8' y2='0' stroke='%23c8860a' stroke-width='0.8' stroke-opacity='0.35'/%3E%3Cline x1='-2' y1='2' x2='2' y2='-2' stroke='%23c8860a' stroke-width='0.8' stroke-opacity='0.35'/%3E%3Cline x1='6' y1='10' x2='10' y2='6' stroke='%23c8860a' stroke-width='0.8' stroke-opacity='0.35'/%3E%3C/svg%3E")`,
                    }} />
                </div>
            </div>

            {/* // main white div  */}
            <div style={{
                height: "55vh",
                width: "80vw",
                border: "2px solid black",
                position: "absolute",
                top: "calc(44.5vh + 10vh - 2px)",
                left: "5vw",
                borderBottom: "none",
                backgroundColor: "white",
            }}>

            </div>
        </div >
    )
}