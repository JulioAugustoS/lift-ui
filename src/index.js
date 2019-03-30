import React from 'react';
import { render } from "react-dom";
import { Button } from "./lib/components";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <Button theme="primary">Primary</Button>
    <Button theme="success">Success</Button>
    <Button theme="success" disabled>Disabled</Button>
  </div>
);

render(<App />, document.getElementById("root"));
