import react, { FunctionComponent } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

interface CheckboxRowProps {
  label: string;
  isChecked: boolean;
}

const CheckboxRow: FunctionComponent<CheckboxRowProps> = ({
  label,
  isChecked,
}) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={isChecked} />}
      label={label}
    />
  );
};

export default CheckboxRow;
