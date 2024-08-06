import React from "react";
import 'react-bootstrap/Carousel';
import ImageProcessing from "./ImageProcessing";


function ImgCarousel(props) {
    const carouselId = `carouselExampleFade-${props.id}`;
    return <div>
        <div id={carouselId} className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <ImageProcessing
                        src={props.activeImage}
                        alt={props.alter}
                    />
                </div>
                {props.carouselItems && props.carouselItems.map((value, index) => {
                    console.log(value);
                    return (<div className="carousel-item" key={index}>
                        <ImageProcessing
                            src={value.src}
                            alt={value.alt}
                        />
                    </div>);
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>

}

export default ImgCarousel;
