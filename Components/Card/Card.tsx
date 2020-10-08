import { Card } from "react-bootstrap";
import './card.scss'
const CardContent = ({ data }) => {
    return (
        <>
            {
                data.map((items, idx) => {
                    return (
                        <div className="col-lg-4 col-12 mb-5" key={idx}>
                            <Card>
                                <div className="img-wrapper">
                                    <Card.Img variant="top" src={items.images} />
                                </div>
                                <Card.Body>
                                    <p>{items.pName}</p>
                                    <div>
                                        <p>
                                            <s className="original-price">
                                                {parseInt(items.originalPrice).toLocaleString()}
                                            </s>
                                            &nbsp;
                                            <span className="price">
                                                {parseInt(items.price).toLocaleString()} บาท
                                            </span>
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CardContent;