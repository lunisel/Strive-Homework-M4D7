import { Button, ListGroup, Row, Col } from "react-bootstrap";

const deleteComment = async (asin, fetchBook) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjlkNmIzNTgxNzAwMTVjMjI3NDEiLCJpYXQiOjE2MjYwOTE1NzAsImV4cCI6MTYyNzMwMTE3MH0.DQ1Z-BAdJ47jnBYGg3SUxRfwekU2t4nASPSH90pK6-k",
        },
      }
    );
    if (response.ok) {
      alert("comment deleted!");
      fetchBook();
    } else {
      alert("comment NOT deleted!");
    }
  } catch (error) {
    alert("comment NOT deleted!");
  }
};

const rateAsStars = (rate) => {
  let rateStars = [];
  for (let i = 0; i < rate; i++) {
    let star = <i className="bi bi-star-fill" style={{ color: "#ebcf50" }}></i>;
    rateStars.push(star);
  }
  return rateStars;
};

const SingleComment = (prop) => (
  <ListGroup.Item>
    <div className="rate">{rateAsStars(prop.comment.rate)}</div>
    <Row>
      <Col xs={10}>
        <div className="comments">Comment: {prop.comment.comment}</div>
      </Col>
      <Col xs={2}>
        <Button
          variant="danger"
          className="ml-2"
          onClick={() => deleteComment(prop.comment._id, prop.fetchBook)}
        >
          <i class="bi bi-trash"></i>
        </Button>
      </Col>
    </Row>
  </ListGroup.Item>
);

export default SingleComment;
