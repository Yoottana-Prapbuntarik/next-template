import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.scss";
import {
    Variable
} from './ManageCarousel/CarouselVariable'
const CarouselSlide = (): any => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="continaer-carousel  m-0">
            <Carousel activeIndex={index} onSelect={handleSelect}
                interval={Variable.timeInterval}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Banner goes here .</h3>
                    </Carousel.Caption>
                    <div className="bg-alpha"></div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Banner goes here .</h3>
                    </Carousel.Caption>
                    <div className="bg-alpha"></div>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1512445239398-6d0c4c575b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Banner goes here</h3>
                    </Carousel.Caption>
                    <div className="bg-alpha"></div>

                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselSlide