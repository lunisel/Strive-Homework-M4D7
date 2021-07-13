import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = (prop) => {
  /*   state = {
    comments: [], // comments will go here
    isLoading: true,
    isError: false,
  };
 */

  const [state, setState] = useState({
    comments: [],
    isLoading: true,
    isError: false,
  });

  const fetchBook = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + prop.b.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjlkNmIzNTgxNzAwMTVjMjI3NDEiLCJpYXQiOjE2MjYwOTE1NzAsImV4cCI6MTYyNzMwMTE3MH0.DQ1Z-BAdJ47jnBYGg3SUxRfwekU2t4nASPSH90pK6-k",
          },
        }
      );
      if (response.ok) {
        let comments = await response.json();
        setState({
          comments: comments,
          isLoading: false,
          isError: false,
        });
      } else {
        console.log("error");
        setState({
          ...state,
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        isLoading: false,
        isError: true,
      });
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  useEffect(() => {
    fetchBook();
  }, [prop.b.asin]);

  return (
    <div>
      {state.isLoading && <Loading />}
      {state.isError && <Error />}
      <img src={prop.b.img} style={{ width: "10rem" }} alt="book-cover" />
      <AddComment asin={prop.b.asin} fetchBook={fetchBook} />
      <CommentList commentsToShow={state.comments} fetchBook={fetchBook} />
    </div>
  );
};

export default CommentArea;
