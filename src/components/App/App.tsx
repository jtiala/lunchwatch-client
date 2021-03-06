import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import apolloClient from "../../graphql/apolloClient";
import { AppStateProvider } from "../../state/appState";
import theme from "../../theme";
import useStyles from "./App.styles";
import Header from "../Header/Header";
import MenuWall from "../MenuWall/MenuWall";
import Privacy from "../Privacy/Privacy";
import Footer from "../Footer/Footer";

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ApolloProvider client={apolloClient}>
      <AppStateProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <CssBaseline />

            <div className={classes.app}>
              <Header />

              <Switch>
                <Route path="/privacy">
                  <Privacy />
                </Route>
                <Route>
                  <MenuWall />
                </Route>
              </Switch>
              <Footer />
            </div>
          </Router>
        </ThemeProvider>
      </AppStateProvider>
    </ApolloProvider>
  );
};

export default App;
