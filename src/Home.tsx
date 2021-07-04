import React, { useEffect, useState } from "react";
import { Card, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { useUser } from "@clerk/clerk-react";
import { GET_POST_URL } from "./constants";

const Home = () => {
  const { fullName } = useUser();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await fetch(GET_POST_URL);
        const postsFetched = await data.json();
        setPosts(postsFetched);
      } catch (error) {}
    };

    fetchPosts();
  }, []);

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col>
          <Jumbotron fluid className="text-center">
            <h1 className="text-info">Welcome, {fullName}!</h1>
            <p>This is an example using Clerk with React</p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        {posts.map((post) => {
          const { title, body, id } = post;
          return (
            <Col key={id} className="d-flex justify-content-center mb-2">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="text-primary">{title}</Card.Title>
                  <Card.Text className="text-justify">{body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Home;
