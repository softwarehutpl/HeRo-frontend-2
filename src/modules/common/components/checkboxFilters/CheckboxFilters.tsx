import * as React from "react";
import CheckboxRow from "./CheckboxRow";
import { StyledHeading } from "./CheckboxStyles";
import { CustomFormGroup } from "./CheckboxStyles";

interface CheckboxValue {
  header: string;
  filtersList: string[];
}

const CheckboxFilters: React.FC<CheckboxValue> = ({ header, filtersList }) => {
  const [checked, setChecked] = React.useState(false);

  const handleOnClick = (value: boolean) => {
    setChecked(value);
    // go to parent
  };

  const listOfCheckbox = filtersList.map((value: string, id: number) => (
    <CheckboxRow
      key={id}
      isChecked={checked}
      handleOnClick={handleOnClick}
      label={value}
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
