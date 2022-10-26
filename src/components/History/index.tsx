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
        <Margin bottom={22}>
          <Center>
            <AutoHeightImage width={90} src={src} />
          </Center>
        </Margin>
        <Text size={1.3}>{name}</Text>
        <Text size={1.3}>{info}</Text>
      </div>
    </Center>
  );
}
