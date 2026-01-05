export default function Offline() {
    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "#f7f7f7",
                textAlign: "center",
                padding: "2rem",
                fontFamily: "sans-serif"
            }}
        >
            <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                🚧 Site Under Maintenance
            </h1>
            <p style={{ maxWidth: 500 }}>
                Our website is currently offline for a short break. We’ll be
                back soon with something awesome!
            </p>
        </div>
    )
}
