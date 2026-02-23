export function FourthPage() {
    const verticalLines = [10, 30, 50, 70, 90];

    return (
        <div style={{
            height: "100vh",
            width: "90vw",

        }}>
            {verticalLines.map((left, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute",
                        top: "274vh",
                        left: `${left}%`,
                        width: "1px",
                        // marginTop: "256vh",
                        height: "10%",
                        backgroundImage: "repeating-linear-gradient(to bottom, #7d7d7d 0px, #787878 4px, transparent 4px, transparent 8px)",
                        zIndex: 1,
                    }}
                />
            ))}
            <hr style={{
                marginTop: "10vh",
                marginLeft: "5vw",
                width: "90vw",
                height: "2.5px",
                backgroundColor: "black",
                // border: "none"
            }} />


            <h3 style={{
                marginTop: "20px",
                marginLeft: "5vw",
                fontSize: "50px",
                lineHeight: "1.1",
                fontWeight: "300"
            }}>
                Smarter than <br /> Selenium, safer <br /> than an agent
            </h3>

            <h5 style={{
                marginLeft: "5vw",
                marginTop: "30px",
                fontSize: "28px",
                fontWeight: "300",
                lineHeight: "1.1"
            }}>
                The first browser automation <br />
                framework built for the AI era— <br />
                giving you both the predictability of <br />
                code and the adaptability of AI.
            </h5>
        </div>
    )
}

