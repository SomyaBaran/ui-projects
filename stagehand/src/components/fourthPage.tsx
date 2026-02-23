export function FourthPage() {
    const verticalLines = [10, 30, 50, 70, 90];

    const coreFeatures = [
        { label: "Can read page content", legacy: true, stage: true, browser: true },
        { label: "Can interact with page", legacy: true, stage: true, browser: true },
        { label: "Continues to work when the page changes", legacy: false, stage: true, browser: true },
        { label: "Extract data using natural language", legacy: false, stage: true, browser: true },
        { label: "Follows the same steps each time", legacy: true, stage: true, browser: false },
        { label: "Reliable", legacy: true, stage: true, browser: false },
    ];

    const frameworkStandards = [
        { label: "Fast, cheap, and predictable", legacy: true, stage: true, browser: false },
        { label: "Understandable", legacy: false, stage: true, browser: false },
        { label: "Self-Healing", legacy: false, stage: true, browser: true },
        { label: "Open source", legacy: false, stage: true, browser: false },
    ];

    const Check = () => <span style={{ fontSize: "16px", color: "#555" }}>✓</span>;
    const Dash = () => <span style={{ fontSize: "16px", color: "#aaa" }}>–</span>;

    const featureLabelStyle: React.CSSProperties = {
        padding: "14px 16px",
        color: "#333",
        fontWeight: "300",
        fontSize: "14px",
        borderBottom: "1px dashed #ccc",
        width: "50%",
    };

    const valueCellStyle: React.CSSProperties = {
        padding: "14px 16px",
        textAlign: "center",
        borderBottom: "1px dashed #ccc",
    };

    const highlightCellStyle: React.CSSProperties = {
        ...valueCellStyle,
        backgroundColor: "rgba(255, 220, 100, 0.2)",
    };

    const sectionHeaderStyle: React.CSSProperties = {
        padding: "12px 16px",
        fontWeight: "600",
        fontSize: "13px",
        color: "#333",
        backgroundColor: "#f0f0f0",
    };

    const headerCellStyle: React.CSSProperties = {
        padding: "10px 16px",
        fontWeight: "400",
        fontSize: "13px",
        color: "#333",
        textAlign: "center",
        borderBottom: "1px solid #ddd",
        verticalAlign: "bottom",
        paddingBottom: "14px",
    };

    const renderRow = (row: { label: string; legacy: boolean; stage: boolean; browser: boolean }, i: number) => (
        <tr key={i}>
            <td style={featureLabelStyle}>{row.label}</td>
            <td style={valueCellStyle}>{row.legacy ? <Check /> : <Dash />}</td>
            <td style={highlightCellStyle}>{row.stage ? <Check /> : <Dash />}</td>
            <td style={valueCellStyle}>{row.browser ? <Check /> : <Dash />}</td>
        </tr>
    );

    return (
        <div style={{ height: "100vh", width: "90vw" }}>
            {verticalLines.map((left, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute",
                        top: "274vh",
                        left: `${left}%`,
                        width: "1px",
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
            }} />

            <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "4vw",
                marginLeft: "5vw",
                marginTop: "20px",
                width: "90%",
            }}>
                <div style={{ flexShrink: 0 }}>
                    <h3 style={{
                        fontSize: "50px",
                        lineHeight: "1.1",
                        fontWeight: "300",
                        margin: 0,
                    }}>
                        Smarter than <br /> Selenium, safer <br /> than an agent
                    </h3>

                    <h5 style={{
                        marginTop: "30px",
                        fontSize: "28px",
                        fontWeight: "300",
                        lineHeight: "1.1",
                        margin: "30px 0 0 0",
                    }}>
                        The first browser automation <br />
                        framework built for the AI era— <br />
                        giving you both the predictability of <br />
                        code and the adaptability of AI.
                    </h5>
                </div>

                <table style={{
                    flex: 1,
                    borderCollapse: "collapse",
                    fontSize: "14px",
                    fontFamily: "inherit",
                }}>
                    <thead>
                        <tr>
                            <th style={{ ...headerCellStyle, textAlign: "left" }}></th>
                            <th style={headerCellStyle}>Legacy<br />frameworks</th>
                            <th style={{ ...headerCellStyle, backgroundColor: "rgba(255, 220, 100, 0.2)" }}>Stagehand</th>
                            <th style={headerCellStyle}>Browser<br />agent</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={4} style={sectionHeaderStyle}>Core features</td>
                        </tr>
                        {coreFeatures.map(renderRow)}
                        <tr>
                            <td colSpan={4} style={sectionHeaderStyle}>Framework standards</td>
                        </tr>
                        {frameworkStandards.map(renderRow)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}