import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import BookList from "./Components/BookList";
import fantasyBooks from "../src/fantasy.json";
import NavBar from "./Components/MyNavbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Row>
          <Col xs={12}>
            <BookList books={fantasyBooks} />
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
