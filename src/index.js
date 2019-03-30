import React from 'react';
import { render } from "react-dom";
import { Button } from "./lib/components";

const App = () => (
  <div style={{ width: 1200, margin: "15px auto" }}>
    <h1>Buttons</h1>
    <Button theme="primary">Primary</Button>
    <Button theme="success">Success</Button>
    <Button theme="warning">Warning</Button>
    <Button theme="danger">Danger</Button>
    <Button theme="info">Info</Button>
    <Button theme="light">Light</Button>
    <Button theme="dark">Dark</Button>
    <Button theme="success" disabled>Disabled</Button>
    <Button theme="link">Link</Button>
    <br /><br />
    <h1>Outline Buttons</h1>
    <Button theme="outline-primary">Primary</Button>
    <Button theme="outline-success">Success</Button>
    <Button theme="outline-warning">Warning</Button>
    <Button theme="outline-danger">Danger</Button>
    <Button theme="outline-info">Info</Button>
    <Button theme="outline-light">Light</Button>
    <Button theme="outline-dark">Dark</Button>
    <Button theme="outline-primary" disabled>Disabled</Button>
  </div>
);

render(<App />, document.getElementById("root"));
