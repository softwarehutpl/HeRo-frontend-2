import * as React from "react";
import { CustomForm } from "./CheckboxRowStyles";
import { StyledHeading } from "./CheckboxStyles";
import { CustomFormGroup } from "./CheckboxStyles";
import Checkbox from "@mui/material/Checkbox";

interface CheckboxValue {
  header: string;
  checkbox: any;
  dispatch: React.Dispatch<any>;
}

const CheckboxFilters: React.FunctionComponent<CheckboxValue> = ({
  header,
  checkbox,
  dispatch,
}) => {
  const handleOnClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(event.currentTarget.id);
  };

  const listOfCheckbox = checkbox.map((item: any) => (
    <CustomForm
      key={item.id}
      control={
        <Checkbox
          id={item.id}
          checked={item.isChecked}
          onChange={handleOnClick}
        />
      }
      label={item.title}
    />
  ));

  return (
    <CustomFormGroup>
      <StyledHeading>{header}</StyledHeading>
      {listOfCheckbox}
    </CustomFormGroup>
  );
};

export default CheckboxFilters;
