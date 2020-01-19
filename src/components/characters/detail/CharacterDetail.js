import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./CharacterDetail.css";
import DetailList from "./DetailList";
import Breadcrumb from "./Breadcrumb";

export default function CharacterDetail({ details }){
    console.log(details);
    
    const {name, type, imageUrl, colors, rarity, text} = details.card;
    
    return ( 
        <>
            <Breadcrumb name={name}/>
                    <h1>{name}</h1>
            <Row>
                <Col md={6} className="detail-image">
                    <Image src={imageUrl} />
                </Col>
                <Col>
                    <DetailList type={type} colors={colors} rarity={rarity} text={text}/>
                </Col>
            </Row>
      </>
    );
}

CharacterDetail.propTypes = {
    details: PropTypes.object.isRequired,
};

//It should have the About, Rarity and Color information displayed on it.