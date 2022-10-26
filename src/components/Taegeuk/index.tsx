import Center from "../Center";
import Text from "../Text";
import Margin from "../Margin";
import AutoHeightImage from "../AutoHeightImage";
import Symbol from "../Symbol";

export default function Taegeuk() {
  const history = {
    number: "No.??",
    fileName: "box_logo_15_seoul.png",
    name: "Taegeuk",
    info: "2023, Seoul-Korea",
  };

  return (
    <>
      <Center>
        <div>
          <Margin top={18} bottom={14}>
            <Text size={1.3}>
              {Number.isInteger(history.number)
                ? `No.${history.number}`
                : `${history.number}`}
            </Text>
          </Margin>
          <Margin bottom={22}>
            <Center>
              <div style={{ height: "200px" }}>
                <Symbol src="/images/3.png" left={-410} top={-210} />
                <Symbol src="/images/4.png" left={-410} top={140} />
                <Symbol src="/images/5.png" left={210} top={-210} />
                <Symbol src="/images/6.png" left={210} top={140} />
                <AutoHeightImage
                  width={90}
                  src={`/images/logo/${history.fileName}`}
                />
              </div>
            </Center>
          </Margin>
          <Text size={1.3}>{history.name}</Text>
          <Text size={1.3}>{history.info}</Text>
        </div>
      </Center>
    </>
  );
}
