import React from "react";
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";

export default function HomePage({ history }) {
  return (
    <>
      <Container fluid textAlign="center" className="masthead">
        <Header as="h1" inverted>
          Tribe
        </Header>
        <Button onClick={() => history.push("/events")} size="huge" inverted>
          Get started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </>
  );
}
