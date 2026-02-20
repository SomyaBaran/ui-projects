export default function ThirdPage() {
    return (
        <div style={{
            height: "90vh",
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
                zIndex: 0,
            }} />

            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
                border: "2px solid black",
                height: "25vh",
                width: "40vw",
                backgroundColor: "white",
                borderTop: "none",
                borderLeft: "none",
            }} />

            <div style={{
                position: "absolute",
                top: 0,
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
                left: 0,
                zIndex: 1,
                width: "78px",
                height: "55px",
                backgroundColor: "white",
                borderRight: "2px solid black",
                borderLeft: "none",
                borderBottom: "2px solid black"
            }} />
        </div>
    )
}