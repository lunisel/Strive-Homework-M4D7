import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = (prop) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={8}>
          <Row className="d-flex align-items-baseline py-2">
            <Col md={5}>
              <h1>Latest Releases</h1>
            </Col>
            <Col md={7}>
              <Form.Group
                className="d-flex align-items-baseline"
                controlId="formBasicEmail"
              >
                <Form.Label id="search">Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {prop.books
              .filter((book) => book.title.toLowerCase().includes(searchQuery))
              .map((book) => (
                <Col
                  xs={6}
                  md={4}
                  lg={3}
                  className="my-1"
                  key={book.asin}
                  style={{ height: "25rem" }}
                  onClick={() => {
                    setSelectedBook(book);
                  }}
                >
                  <SingleBook b={book} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <h3>Comments:</h3>
          {selectedBook && <CommentArea b={selectedBook} />}
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default BookList;
