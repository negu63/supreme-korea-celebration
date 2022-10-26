export default function Text({
  size = 2,
  children,
}: {
  children: string;
  size: Number;
}) {
  return (
    <>
      <div>
        <p style={{ fontSize: `${size}rem` }}>{children}</p>
      </div>
    </>
  );
}
