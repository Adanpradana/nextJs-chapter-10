"use client"

import { getApiDetailGame } from "@/app/api/GameController";
import LandingPageLayout from "@/app/layouts/LandingPageLayout";
import { Row, Col, Card, Button } from "react-bootstrap";

const gametDetails = async () => {
    const game = await getApiDetailGame();
    console.log(game)

    return (
        <div>
        <LandingPageLayout>
            <Row>
                <Col></Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={game.thumbnail_url} width={1000} />
                        <Card.Body>
                        <Card.Title style={{color:'black'}}>{game.Name}</Card.Title>
                        <Card.Text>{game.Description}</Card.Text>
                        <Card.Text>Player Count : {game.play_count}</Card.Text>
                        <Button href={`${game.Game_url}`} className="btn-play-now">Play Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
             </Row>
        </LandingPageLayout>
        </div>
    );
}

export default gametDetails;
