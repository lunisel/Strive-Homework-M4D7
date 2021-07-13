import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (prop) => {
  const [commentForm, setCommentForm] = useState({
    comment: "",
    rate: 1,
    elementId: prop.asin,
  });

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(commentForm),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjlkNmIzNTgxNzAwMTVjMjI3NDEiLCJpYXQiOjE2MjYwOTE1NzAsImV4cCI6MTYyNzMwMTE3MH0.DQ1Z-BAdJ47jnBYGg3SUxRfwekU2t4nASPSH90pK6-k",
          },
        }
      );
      if (response.ok) {
        // the comment has been sent succesfully!!
        alert("Comment was sent!");
        setCommentForm({
          comment: "",
          rate: 1,
          elementId: prop.asin,
        });
        prop.fetchBook();
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Label>Write your comment here:</Form.Label>
          <Form.Control
            type="textarea"
            rows={3}
            placeholder="Add comment here"
            value={commentForm.comment}
            onChange={(e) =>
              setCommentForm({
                ...commentForm,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Select Rating:</Form.Label>
          <Form.Control
            as="select"
            value={commentForm.rate}
            onChange={(e) =>
              setCommentForm({
                ...commentForm,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
