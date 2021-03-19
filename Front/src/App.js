import React, { useState } from "react";
import { Container, ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import NavBar from "./Components/Navbar";
import "./App.css";
const App = () => {
  const [list, setList] = useState([]);

  return (
    <div>
      <NavBar setList={setList} />
      <Container fluid="lg" className="container mt-3">
        <h1>Results:</h1>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            {list.length <= 0 ? (
              <p>No hay palabras</p>
            ) : (
              <ListGroup>
                {list.map((element, index) => {
                  return <ListGroupItem key={index}>{element}</ListGroupItem>;
                })}
              </ListGroup>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
