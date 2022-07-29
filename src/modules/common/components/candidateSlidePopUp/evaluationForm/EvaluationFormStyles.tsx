import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";

export const HeaderText = styled(Typography)`
  font-size: 24px;
  padding: 20px 10px;
`;

export const ModalWrapper = styled("div")`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const CustomForm = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
`;

export const CustomField = styled(TextField)`
  width: 40%;
`;

export const CustomSelect = styled(Select)`
  width: 40%;
`;

export const ButtonsWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
`;
