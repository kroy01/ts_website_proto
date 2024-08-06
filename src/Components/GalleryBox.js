import "./GalleryBox.css";

function GalleryBox(props) {
  return (
    <div
      className="PicBox"
      style={{
        marginLeft: props.margleft,
        marginRight: props.margright,
        marginBottom: props.margvert,
        marginTop: props.margvert,
      }}
    >
      <div
        className="PicHeading HeadRoundTop"
        style={{
          color: props.color,
          paddingTop: props.headpadtopmain ? props.headpadtopmain : "1vh",
          fontFamily: props.headfontmain ? props.headfontmain : "Genos",
        }}
      >
        <p
          style={{
            fontSize: props.fontsizemain ? props.fontsizemain : "2.5vmax",
            textAlign: "center",
            fontFamily: "Genos",
            //fontSize: "2vmax",
          }}
        >
          {props.imgheading}
        </p>
      </div>
      <img src={props.imgpicture} alt={props.imgalt} className="PicImage" />
      <div
        className="PicHeading HeadRoundBottom"
        style={{
          color: props.color,
          paddingBottom: props.headpadtop ? props.headpadtop : "0.2vh",
          fontFamily: props.headfont ? props.headfont : "Genos",
        }}
      >
        <p
          style={{
            fontSize: props.fontsize ? props.fontsize : "2vmax",
            textAlign: "center",
            fontFamily: "Genos",
            //fontSize: "2vmax",
            paddingInline: "0vh",
            marginInline: "0vh",
          }}
        >
          {props.imgname1 ? props.imgname1 : props.imgheading}
          <br />
          {props.imgname2 ? props.imgname2 : " "}
        </p>
      </div>
    </div>
  );
}

export default GalleryBox;
