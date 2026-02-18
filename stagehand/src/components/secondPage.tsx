export default function SecondPage() {
    const verticalLines = [16, 33, 50, 66, 83];

    return (
        <div style={{
            height: "100vh",
            width: "90vw",
            position: "relative",
            marginLeft: "5vw"
        }}>

            {
                verticalLines.map((left, i) => (
                    <div key={i} style={{
                        position: "absolute",
                        left: `$(left)`,
                        width: "1px",
                        backgroundImage: "repeating-linear-gradient(to bottom, #aaa 0px, #aaa 8px, transparent 8px, transparent 16px)",
                        zIndex: 1
                    }} />

                ))}

            <div style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                gap: "1px",
                padding: "40px",
            }}>
                <div style={{
                    background: "#ffffff",
                    width: "70%",
                    height: "300px",
                    borderRadius: "4px",
                }} />
                <div style={{
                    background: "#ffffff",
                    width: "70%",
                    height: "300px",
                    borderRadius: "4px",
                }} />
            </div>
        </div>
    )
}