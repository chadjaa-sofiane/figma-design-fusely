import React from "react";
import { Button } from "../core";
import { ButtonsField } from "./style";

function Buttons() {
  return (
    <ButtonsField>
      <Button> Log In </Button>
      <Button color="primary"> Get Started </Button>
    </ButtonsField>
  );
}

export default Buttons;
