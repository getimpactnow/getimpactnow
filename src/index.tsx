import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";
import { Home } from "./pages/home";
import { IssuePage } from "./pages/home/issue";
import { RecoilRoot } from "recoil";
import Text from "@chakra-ui/core/dist/Text";
import BasePageTemplate from "./components/templates/menu-page-template";
import { Profile } from "./pages/profile";
import SimplePage from "./components/templates/simple-page";

const GetImpactNow: React.FC = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Router>
          <Switch>
            <Route exact path="/">
              <BasePageTemplate>
                <Home />
              </BasePageTemplate>
            </Route>
            <Route path="/profile">
              <SimplePage>
                <Profile />
              </SimplePage>
            </Route>
            <Route path="/politician">
              <BasePageTemplate>
                <Text>Politician</Text>
              </BasePageTemplate>
            </Route>
            <Route path="/issues/:issueId">
              <BasePageTemplate>
                <IssuePage />
              </BasePageTemplate>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
};

render(<GetImpactNow />, document.getElementById("root"));
