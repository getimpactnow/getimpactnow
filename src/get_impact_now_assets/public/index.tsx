// @ts-ignore
import get_impact_now from "ic:canisters/get_impact_now";
import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import styled from "@emotion/styled";
import { ThemeProvider, theme, Button } from "@chakra-ui/core";
import { Menu } from "./menu";

const StyledBox = styled.div`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: "white";
  }
`;

const GetImpactNow: React.FC = () => {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");

  const doGreet = React.useCallback(async () => {
    const greeting = await get_impact_now.greet(name);
    setMessage(greeting);
  }, [name]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Menu />
        <div style={{ fontSize: "30px" }}>
          <StyledBox>
            <p>Welcome to get.impact.now</p>
            <p>
              Type your message in the Name input field, then click{" "}
              <b> Get Greeting</b> to display the result.
            </p>
          </StyledBox>
          <div style={{ margin: "30px" }}>
            <input
              id="name"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            ></input>
            <Button variantColor="green" onClick={() => doGreet()}>
              Get Greeting!
            </Button>
          </div>
          <div>
            Greeting is: "<span style={{ color: "blue" }}>{message}</span>"
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route path="/users">
            <div>Users</div>
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

render(<GetImpactNow />, document.getElementById("app"));
