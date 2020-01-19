import React from "react"
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CharacterList.css";

function CharacterItem({multiverseid, name, imageUrl, history}){
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button className="card-button" block onClick={() => history.push(`/character/${multiverseid}`)} > View </Button>
            </Card.Body>
        </Card>
    
    
    );
}

CharacterItem.propTypes = {
    multiverseid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(CharacterItem);