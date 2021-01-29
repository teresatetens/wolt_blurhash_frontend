import React from "react";
import Card from "react-bootstrap/Card";
import { Blurhash } from "react-blurhash";


const SingleCard = ({ restaurant }) => {
    return (
        <Card className="fullCard">
            <div className="cardImage">
                <Blurhash hash={restaurant.blurhash} className="myBlurHash" />
            </div>
            <Card.Body>
                <Card.Title className = "restaurant-name">{restaurant.name}</Card.Title>
                <Card.Text className= {restaurant.online ===false ? "offline": "online"}>
                    {restaurant.online === true ? `online` : `offline`}
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default SingleCard;
