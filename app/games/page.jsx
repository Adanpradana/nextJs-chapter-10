"use client"

import LandingPageLayout from "../layouts/LandingPageLayout";
import { Col, Row, Card, Button } from "react-bootstrap";
import Link from "next/link";

const getApiGame = async () => {
    const response = await fetch('https://binarwave30team1-be-production-deb9.up.railway.app/games/rooms');
    const data = await response.json();
    const room = await data.rooms

    return room;
};

const Games = async () => {
    const game = await getApiGame();
    console.log(game);

    return (
        <div >
            <LandingPageLayout>
                    <Row className="pt-5 px-3 gap-3 m-0 justify-content-center">
                        {game.map((item) => (
                            <Col 
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            className=" d-flex justify-content-center p-0 m-0">
                            <Card style={{ width: "100%" }}>
                                <Card.Img variant="top" height={200} src={item.thumbnail_url} />
                                <Card.Body>
                                    <Card.Title>{item.Name}</Card.Title>
                                    <Card.Text>{item.Description}</Card.Text>
                                    <Card.Text>Play Count : {item.play_count}</Card.Text>
                                    <Link href="/games/details">
                                        <Button variant="primary">View More</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row>
            </LandingPageLayout>
        </div>
    );
};

export default Games;