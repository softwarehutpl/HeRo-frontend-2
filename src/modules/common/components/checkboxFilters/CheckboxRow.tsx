
import { FunctionComponent, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

interface CheckboxRowProps {
  label: string;
  isChecked: boolean;
  handleOnClick: (value: boolean) => void;
}

const CheckboxRow: FunctionComponent<CheckboxRowProps> = ({
  label,
  isChecked,
  handleOnClick,
}) => {
  const [checkboxValue, setCheckboxValue] = useState(isChecked);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxValue(event.target.checked);
    handleOnClick(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Checkbox checked={checkboxValue} onChange={handleOnChange} />}
      label={label}
    />
  );
};

export default CheckboxRow;
