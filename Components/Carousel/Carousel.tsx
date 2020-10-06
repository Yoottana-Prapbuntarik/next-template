import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.scss";
const CarouselSlide = (): any => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="continaer-carousel  m-0">
            <Carousel activeIndex={index} onSelect={handleSelect}
                interval={2000}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1601191905906-d49048eb085c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1601141837559-41b0f924e962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1601191905906-d49048eb085c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselSlide