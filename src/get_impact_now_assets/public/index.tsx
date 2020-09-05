// @ts-ignore
import get_impact_now from "ic:canisters/get_impact_now";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";
import { Home } from "./pages/home";
import { IssuePage } from "./pages/home/issue";

const GetImpactNow: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/issues/:issueId">
            <IssuePage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

render(<GetImpactNow />, document.getElementById("app"));
