import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";
import { RecoilRoot } from "recoil";
import { Profile } from "./pages/profile";
import SimplePage from "./components/templates/simple-page";

const GetImpactNow: React.FC = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Router>
          <Switch>
            <Route path="/">
              <SimplePage>
                <Profile />
              </SimplePage>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
};

render(
  <GetImpactNow />,
  document.getElementById(
    process.env.NODE_ENV === "development" ? "root" : "app"
  )
);
