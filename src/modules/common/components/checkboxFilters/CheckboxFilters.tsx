import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import CheckboxRow from "./CheckboxRow";

const CheckboxFilters = () => {
  const [checked, setChecked] = React.useState([true, false]);

  return (
    <FormGroup>
      <h3>Status</h3>
      <CheckboxRow isChecked={checked[0]} label="New" />
    </FormGroup>
  );
};

export default CheckboxFilters;
