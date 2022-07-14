import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";

export const StyledHeading = styled("h2")`
  margin: 0;
  padding-top: 10px;
  font-size: 20px;
`;

export const CustomFormGroup = styled(FormGroup)`
  min-width: 150px;
  padding-left: 10px;
  border-left: solid 1px #c5c5c5;
  border-right: solid 1px #c5c5c5;
`;
