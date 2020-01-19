import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

export default function DetailList({ type, colors, rarity, text })

{
console.log(colors)
    if (colors.length === 0){
        colors = "Colorless"
    }
    return (
        <ListGroup>
            <ListGroup.Item>
                <b>Type</b>: {type}
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Rarity</b>: {rarity}
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Color</b>: {colors}
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Card text</b>:<br/> {text}
            </ListGroup.Item>

        </ListGroup>
    )
}

DetailList.propTypes = {
    type: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    rarity: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};