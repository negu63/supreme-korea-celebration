import AutoHeightImage from "../AutoHeightImage";
import Center from "../Center";
import Margin from "../Margin";
import Text from "../Text";

export default function Usage() {
  return (
    <>
      <Margin top={30}>
        <Center>
          <div>
            <Center>
              <Margin bottom={1}>
                <AutoHeightImage
                  width={40}
                  maxWidth={150}
                  src={"/images/logo/box_logo_1_newyork.png"}
                />
              </Margin>
            </Center>
            <Text size={1.2}>{"2023 Supreme Korea"}</Text>
            <Text size={1.2}>{"Celebration"}</Text>
            <Margin top={12}>
              <Text size={1.7}>{'"Swipe or Scroll"'}</Text>
            </Margin>
          </div>
        </Center>
      </Margin>
    </>
  );
}
