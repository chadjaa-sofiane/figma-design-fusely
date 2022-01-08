import React from "react";
import { Button } from "../core";
import { ButtonsField } from "./style";

function Buttons() {
  return (
    <ButtonsField>
      <Button variant="outlined"> Log In </Button>
      <Button> Get Started </Button>
    </ButtonsField>
  );
}

export default Buttons;
