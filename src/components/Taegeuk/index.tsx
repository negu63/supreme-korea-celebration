import Center from "../Center";
import Text from "../Text";
import Margin from "../Margin";
import AutoHeightImage from "../AutoHeightImage";
import Symbol from "../Symbol";
import { useState } from "react";

export default function Taegeuk() {
  const logos = [
    "box_logo_15_seoul_small.png",
    "supreme-taeguek-glitch_small.gif",
    "supreme-taeguk-kor_small.png",
    "supreme-taeguk-kor-glitch_small.gif",
  ];

  const [logoState, setLogoState] = useState(0);
  const [duration, setDuration] = useState(1000);

  setTimeout(() => {
    setLogoState((logoState + 1) % 4);
    if (logoState == 0) setDuration(600);
    else if (logoState == 1) setDuration(300);
    else if (logoState == 2) setDuration(500);
    else setDuration(3000);
  }, duration);

  return (
    <>
      <Center>
        <div>
          <Margin top={18} bottom={14}>
            <Text size={1.3}>{"No.??"}</Text>
          </Margin>
          <Margin bottom={window.innerHeight > 1000 ? 22 : 0}>
            <Center>
              <div style={{ height: "200px" }}>
                {window.innerWidth >= 850 && (
                  <>
                    <Symbol src="/images/3.png" left={-410} top={-210} />
                    <Symbol src="/images/4.png" left={-410} top={140} />
                    <Symbol src="/images/5.png" left={210} top={-210} />
                    <Symbol src="/images/6.png" left={210} top={140} />
                  </>
                )}
                <AutoHeightImage
                  width={90}
                  src={`/images/logo/${logos[logoState]}`}
                />
              </div>
            </Center>
          </Margin>
          <Text size={1.3}>{"Taegeuk"}</Text>
          <Text size={1.3}>{"2023, Seoul-Korea"}</Text>
          <Margin top={10}>
            <Text size={1.5}>{"Comming Soon"}</Text>
          </Margin>
        </div>
      </Center>
    </>
  );
}
