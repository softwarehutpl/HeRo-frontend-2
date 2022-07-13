import * as React from "react";
import CheckboxRow from "./CheckboxRow";
import { StyledHeading } from "./CheckboxStyles";
import { CustomFormGroup } from "./CheckboxStyles";

// data to test did map function works
// const dataStatus = ["New", "In processing", "Dropped out", "Hired"];
// const dataStage = ["New", "In processing", "Dropped out", "Hired"];

const data = {
  status: {
    label: "Status",
    data: ["New", "In processing", "Dropped out", "Hired"],
  },
  stage: {
    label: "Stage",
    data: [
      "Evaluation",
      "Interview",
      "Phone interview",
      "Tech interview",
      "Offer",
    ],
  },
};

const CheckboxFilters = () => {
  const [checked, setChecked] = React.useState(false);

  const handleOnClick = (value: boolean) => {
    setChecked(value);
    // go to parent
  };

  const listOfStatus = data.status.data.map((value: string) => (
    <CheckboxRow
      isChecked={checked}
      handleOnClick={handleOnClick}
      label={value}
    />
  ));

  const listOfStage = data.stage.data.map((value: string) => (
    <CheckboxRow
      isChecked={checked}
      handleOnClick={handleOnClick}
      label={value}
    />
  ));

  return (
    <CustomFormGroup>
      <StyledHeading>{data.status.label}</StyledHeading>
      {listOfStatus}
      <StyledHeading>{data.stage.label}</StyledHeading>
      {listOfStage}
    </CustomFormGroup>
  );
};

export default CheckboxFilters;
