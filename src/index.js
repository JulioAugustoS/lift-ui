import React from 'react';
import { render } from "react-dom";
import { Button, Alert, Card } from "./lib/components";

const App = () => (
  <div style={{ width: 1200, margin: "15px auto" }}>
    <h1>Alerts</h1>
    <div style={{ width: 600 }}>
      { 
        [
          'primary',
          'success',
          'warning',
          'danger',
          'info',
          'light',
          'dark'
        ].map((theme, key) => (
          <Alert 
            theme={theme} 
            key={key} 
            text={`This is a ${ theme } alert—check it out!`}
          />
        )) 
      }
    </div>
    <br /><br />

    <h1>Alert - Dismissing</h1>
    <div style={{ width: 600 }}>
      <Alert 
        theme="danger"
        text="Oh snap! You got an error!"
        dismissible
      />
    </div>
    <br /><br />

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
    <br /><br />
    
    <h1>Card</h1>
    <Card
      width="286px"
      img="https://via.placeholder.com/286x180"
      textAlign="center"
      footerAlign="center"
      title="Card Title"
      subtitle="Card Subtitle"
      text="Some quick example text to build on the card title and make up the bulk of the card's content."
      footer={
        <div>
          <Button theme="dark">Enviar</Button> 
          <Button theme="link">Salvar</Button> 
        </div>
      }
    />
  </div>
);

render(<App />, document.getElementById("root"));
