import React from "react";
import './ContentBox.css';
import ImgCarousel from "./CarouselComponent";
import 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import DetailsBox from "./DetailsBox";

function ContentBox(props) {
  const detailsId = `detailsBox-${props.detailsId}`;
  const contentboxId = `contentBox-${props.giveid}`;
  const seemoreid = `seemoreBox-${props.detailsId}`
  const scrollid = `/projects#seemoreBox-${props.detailsId}`;

  const ExpandGallery = () => {
    if (
      document.getElementById(detailsId).className ==
      "openExtendedGallery"
    ) {
      document.getElementById(detailsId).className =
        "closeExtendedGallery";
      setTimeout(() => {
        document.getElementById(detailsId).style.display = "none";
      }, 300);
    } else {
      document.getElementById(detailsId).className =
        "openExtendedGallery";
      document.getElementById(detailsId).style.display = "block";
    }
  };

  const formattedText = props.text.replace(/<br>/g, '<br />');
  return <div id={contentboxId} className="content-details-box">
    <div className="box background contain">
      <h2 className="contentBox-heading">{props.heading}</h2>
      <div className="content">
        <div className="image-box">
          <ImgCarousel
            id={props.giveid}
            activeImage={props.activeimg}
            alter={props.activealt}
            carouselItems={props.carouselItemsImages}

          />
        </div>

        <div className="text-box">
          <p dangerouslySetInnerHTML={{ __html: formattedText }} />
        </div>

      </div>
      <div className="Links">
        <Link className={(props.colour == 'white') ? "ClickhereLinkLight" : "ClickhereLinkDark"} as={Link} to={props.link}><b className="link-text-format">{props.linkText}</b></Link>
      </div>
      <div id={seemoreid} className="see-more-button">
        <p
          className={
            props.color == "blue"
              ? "ClickhereLinkLight"
              : "ClickhereLinkDark"
          }
          onClick={ExpandGallery}
          style={{ fontSize: "1.5vmax", textAlign: "center" }}
        >
          {/* <b className="see-more-text-format"><HashLink smooth to={scrollid} className="seemore-scroll" style={{textDecoration:'none', color: 'white'}}>{props.seemoretext}</HashLink></b> */}
          <b className="see-more-text-format"><HashLink smooth to={scrollid} className="seemore-scroll">{props.seemoretext}</HashLink></b>
        </p>
      </div>
    </div>
    <div id={detailsId} style={{ display: "none" }}>
      <DetailsBox
        detailsheading={props.detailsHeading}
        detailstext={props.detailsText}
      />
    </div>
  </div>
}

export default ContentBox;