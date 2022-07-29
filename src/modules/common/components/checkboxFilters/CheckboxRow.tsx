import React from "react";
import { FunctionComponent, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { CustomForm } from "./CheckboxRowStyles";

interface CheckboxRowProps {
  label: string;
  isChecked: boolean;
  handleOnClick: (value: any) => void;
}

const CheckboxRow: FunctionComponent<CheckboxRowProps> = ({
  label,
  isChecked,
  handleOnClick,
}) => {
  const [checkboxValue, setCheckboxValue] = useState(isChecked);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleOnClick(event.target.value);
    console.log("click");
  };
  // const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setCheckboxValue(event.target.checked);
  //   handleOnClick(event.target.checked);
  // };

  return (
    <CustomForm
      control={<Checkbox checked={isChecked} onChange={handleOnChange} />}
      label={label}
    />
  );
};

export default CheckboxRow;
