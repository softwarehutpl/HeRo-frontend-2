import * as React from "react";
// import FormGroup from "@mui/material/FormGroup";
import CheckboxRow from "./CheckboxRow";
import { StyledHeading } from "./CheckboxStyles";
import { CustomFormGroup } from "./CheckboxStyles";

const CheckboxFilters = () => {

  const [checked, setChecked] = React.useState(false);

  const handleOnClick = (value: boolean) => {
    setChecked(value);
    // go to parent
  };

  return (
    <CustomFormGroup>
      <StyledHeading>Status</StyledHeading>
      <CheckboxRow
        isChecked={checked}
        handleOnClick={handleOnClick}
        label="New"
      />
    </CustomFormGroup>
  );
};

export default CheckboxFilters;
