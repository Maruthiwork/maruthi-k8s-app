export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Maruthi Production App</h1>

      <p>Kubernetes + Helm + EKS + GitHub Actions</p>

      <p>Application Status: Healthy ✅</p>
    </main>
  );
}