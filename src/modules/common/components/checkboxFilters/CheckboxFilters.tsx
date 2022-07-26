import * as React from "react";
import CheckboxRow from "./CheckboxRow";
import { StyledHeading } from "./CheckboxStyles";
import { CustomFormGroup } from "./CheckboxStyles";

interface CheckboxValue {
  header: string;
  filtersList: string[];
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckboxFilters: React.FC<CheckboxValue> = ({
  header,
  filtersList,
  isChecked,
  setIsChecked,
}) => {
  const [checked, setChecked] = React.useState(isChecked);

  const handleOnClick = (value: boolean) => {
    setChecked(value);
    setIsChecked(value);
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
