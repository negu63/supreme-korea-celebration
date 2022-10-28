import Image from "next/image";

export default function AutoHeightImage({
  width=30,
  maxWidth=400,
  src,
}: {
  width?: Number;
  maxWidth?: Number;
  src: string;
}) {
  return (
    <>
      <div style={{ maxWidth: `${maxWidth}px`, width: `${width}vw` }}>
        <Image
          src={src}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          priority={true}
        />
      </div>
    </>
  );
}
