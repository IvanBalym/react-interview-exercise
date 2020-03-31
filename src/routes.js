import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import ImagePage from "./pages/image";
import ImageInfo from "./pages/imageInfo";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/image/:id" component={ImagePage} />
      <Route component={() => <h1 style={{ textAlign: 'center' }}>404</h1>} />
    </Switch>
    <Route path="/image/:id/info" component={ImageInfo} />
  </Router>
);

export default App;
