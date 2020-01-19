import React from "react";
import Heading from "../layout/Heading";
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/button"
import "./about.css";

export default function About(){
    
    
  return (
        <>
            <Heading title="About the game"/>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} className="card__button--toggle" variant="link" eventKey="0">
                            ▼  Defeat your oponent!  ▼
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p>Each player starts the game with 20 life. Knock your opnent down to 0 life, and you win. The most common way to do this is to summon creatures and attack with them.</p>
                            
                            <p>Creature cards are the most important part of many Something decks. They're easy to sport - just look at the lower right of a card. If you see a pair of number separated by a slash, you've got a creature card. Ince it's on the battlefield, a creature continues to attack and defend for you untill your opponent can find a way to take it out.'</p>
                            
                            <p>Most game become a race to see who can deal the most damage first. Summoning the best creatures will help you win that race every time. Check out hte section on casting creature spells.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
  );
}