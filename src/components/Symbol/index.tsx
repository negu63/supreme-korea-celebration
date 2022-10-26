import Image from "next/image";

export default function Symbol({
  src,
  left,
  top,
}: {
  src: string;
  left: Number;
  top: Number;
}) {
  return (
    <div
      style={{
        position: "relative",
        left: `${left}px`,
        top: `${top}px`,
      }}
    >
      <Image
        src={src}
        alt=""
        width="0"
        height="0"
        sizes="100vw"
        style={{
          width: "200px",
          position: "absolute",
          height: "auto",
        }}
      />
    </div>
  );
}
