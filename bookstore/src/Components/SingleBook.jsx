import { useState } from "react";
import { Card } from "react-bootstrap";

const SingleBook = (prop) => {
  return (
    <>
      <Card
        style={{
          height: "100%",
        }}
      >
        <Card.Img
          variant="top"
          src={prop.b.img}
          className="img-fluid w-100"
          style={{ height: "80%" }}
        />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{prop.b.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
