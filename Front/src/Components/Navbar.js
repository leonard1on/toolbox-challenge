import React, { useState } from "react";
import { Navbar, Nav, NavItem, Input, Button } from "reactstrap";
import axios from "axios";
import "../styles/Navbar.css";
const NavBar = (props) => {
  const { setList } = props;
  const [word, setWord] = useState("");

  const changeHandler = (event) => {
    setWord(event.value);
  };

  const sendWord = () => {
    axios.get("http://localhost:8080/iecho?text=" + word).then((response) => {
      console.log(response);
      setList((prev) => [...prev, response.data.text]);
      setWord("");
    });
  };

  return (
    <div>
      <Navbar className="navbar">
        <Nav>
          <NavItem>
            <Input
              style={{ width: "60vw" }}
              type="text"
              name="word"
              value={word}
              id="Word"
              placeholder="Insert Text"
              onChange={(event) => changeHandler(event.currentTarget)}
              onKeyDown={(event) => {
                if (event.key === "Enter") sendWord();
              }}
            />
          </NavItem>
          <NavItem>
            <Button className="button" onClick={sendWord}>
              Send
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
