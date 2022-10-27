import Text from "../../components/Text";
import Center from "../../components/Center";
import AutoHeightImage from "../../components/AutoHeightImage";
import Margin from "../../components/Margin";

export default function History({
  num,
  src,
  name,
  info,
}: {
  num: Number | string;
  src: string;
  name: string;
  info: string;
}) {
  return (
    <Center>
      <div>
        <Margin top={18} bottom={14}>
          <Text size={1.3}>
            {Number.isInteger(num) ? `No.${num}` : `${num}`}
          </Text>
        </Margin>
        <Margin bottom={window.screen.height > 1000 ? 22 : 0}>
          <Center>
            <div style={{ height: "200px" }}>
              <AutoHeightImage width={90} src={src} />
            </div>
          </Center>
        </Margin>
        <Text size={1.3}>{name}</Text>
        <Text size={1.3}>{info}</Text>
      </div>
    </Center>
  );
}
