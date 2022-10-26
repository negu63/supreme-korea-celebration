export default function Margin({ left=0, top=0, right=0, bottom=0, children }: { left?: Number, top?:Number, right?:Number, bottom?:Number, children: JSX.Element }) {
    return (
      <>
        <div
          style={{
            marginLeft: `${left}vh`,
            marginTop: `${top}vh`,
            marginRight: `${right}vh`,
            marginBottom: `${bottom}vh`,
          }}
        >
          {children}
        </div>
      </>
    );
  }
  