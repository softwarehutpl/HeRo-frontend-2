import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CheckboxFilters = () => {
  return (
    <FormGroup>
      <h3>Status</h3>
      <FormControlLabel control={<Checkbox />} label="New" />
      <FormControlLabel control={<Checkbox />} label="In processing" />
      <FormControlLabel control={<Checkbox />} label="Dropped out" />
      <FormControlLabel control={<Checkbox />} label="Hired" />
    </FormGroup>
  );
};

export default CheckboxFilters;
