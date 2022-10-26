export default function Text({ children }: { children: JSX.Element }) {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </>
  );
}
