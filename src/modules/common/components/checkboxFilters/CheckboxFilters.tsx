import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import CheckboxRow from "./CheckboxRow";

const CheckboxFilters = () => {

  const [checked, setChecked] = React.useState(false);

  const handleOnClick = (value: boolean) => {
    setChecked(value);
    // go to parent
  };

  return (
    <FormGroup>
      <h3>Status</h3>
      <CheckboxRow
        isChecked={checked}
        handleOnClick={handleOnClick}
        label="New"
      />
    </FormGroup>
  );
};

export default CheckboxFilters;
