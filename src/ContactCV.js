import React, { Component } from "react";
import { Row, Input, Button } from "react-materialize";

class ContactCV extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
    this.handleAskForCV = this.handleAskForCV.bind(this);
  }

  handleAskForCV() {}

  render() {
    return (
      <div data-testid="contactCV" className="card-panel">
        <a href="/" onClick={this.handleAskForCV}>
          Click here to ask for my CV?
        </a>
        <Row>
          <Input s={12} label="Full Name" />
          <Input type="email" label="Email" s={12} />
        </Row>
        <div>
          <Button waves="light" node="a" href="http://www.google.com">
            {" "}
            Open Me In New Tab{" "}
          </Button>
        </div>
      </div>
    );
  }
}
export default ContactCV;
