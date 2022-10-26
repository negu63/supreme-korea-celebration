import Image from "next/image";

export default function AutoHeightImage({
  width,
  src,
}: {
  width: Number;
  src: string;
}) {
  return (
    <>
      <div style={{ maxWidth:'400px', width: `${width}vw` }}>
        <Image
          src={src}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </>
  );
}