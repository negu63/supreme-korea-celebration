import History from "../../components/History";
import { useEffect, useRef } from "react";
import Taegeuk from "../Taegeuk";

interface HistoryProps {
  number: Number | string;
  fileName: string;
  name: string;
  info: string;
}

export default function Pageable({ histories }: { histories: HistoryProps[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pageableRef = useRef<any>(null);

  const loadPageable = async () => {
    const Pageable = (await import("pageable")).default;
    const pageable = new Pageable(containerRef.current, {
      childSelector: "[data-anchor]",
      anchors: [],
      pips: false,
      animation: 300,
      delay: 0,
      throttle: 50,
      orientation: "horizontal" as "vertical" | "horizontal",
      swipeThreshold: 50,
      freeScroll: false,
      navPrevEl: true,
      navNextEl: false,
      infinite: false,
      events: {
        wheel: true,
        mouse: true,
        touch: true,
        keydown: true,
      },
      easing: (
        currentTime: number,
        startPos: number,
        endPos: number,
        interval: number
      ) => {
        return (
          -endPos * (currentTime /= interval) * (currentTime - 2) + startPos
        );
      },
    });

    pageableRef.current = pageable;
  };

  useEffect(() => {
    loadPageable();
  }, []);

  return (
    <>
      <main className="indexPage pg-wrapper">
        <div id="container" className="pg-container" ref={containerRef}>
          {histories.map((history) => {
            return (
              <div
                key={history.name}
                data-anchor={history.name}
                className="pg-page"
                style={{
                  backgroundImage: `url("/images/back-cut-transformed.png")`,
                }}
              >
                <History
                  num={history.number}
                  src={`/images/logo/${history.fileName}`}
                  name={history.name}
                  info={history.info}
                />
              </div>
            );
          })}
          <div key={"Taegeuk"} data-anchor={"Taegeuk"} className="pg-page">
            <Taegeuk />
          </div>
        </div>
      </main>
    </>
  );
}
