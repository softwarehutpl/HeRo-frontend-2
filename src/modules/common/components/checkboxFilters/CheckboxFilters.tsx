import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import CheckboxRow from "./CheckboxRow";

const CheckboxFilters = () => {
  const [checked, setChecked] = React.useState(true);

  const handleCheckedbox = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <FormGroup>
      <h3>Status</h3>
      <CheckboxRow isChecked={checked} label="New" />
    </FormGroup>
  );
};

export default CheckboxFilters;
