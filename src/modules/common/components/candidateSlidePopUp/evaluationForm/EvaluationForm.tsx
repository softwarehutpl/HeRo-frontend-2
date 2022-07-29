import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {
  HeaderText,
  ModalWrapper,
  CustomForm,
  ButtonsWrapper,
  CustomField,
  CustomSelect,
} from "./EvaluationFormStyles";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import EvaluationSlider from "./evaluationSlider/EvaluationSlider";
import { SlideButton } from "../SlidePopUpStyles";

interface FormProps {
  closeModal: () => void;
}

export function EvaluationForm({ closeModal }: FormProps) {
  const [time, setTime] = useState("");
  const [step, setStep] = React.useState("");

  const [value, setValue] = React.useState("");
  const [isStageOn, setIsStageOn] = React.useState(true);

  const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    closeModal();
  }

  const handleChange = (event: any) => {
    setStep(event.target.value as string);
  };

  const handleStageEvaluation = () => {
    setIsStageOn(!isStageOn);
  };

  const handleDate = (e: any) => {
    setTime(e.target.value);
  };

  return (
    <ModalWrapper>
      <CustomForm onSubmit={handleSubmit}>
        <HeaderText>Interview evaluation with John Doe</HeaderText>
        <CustomField
          id="datetime-local"
          label="When"
          type="datetime-local"
          value={time}
          onChange={(e) => handleDate(e)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <CustomSelect
          displayEmpty
          value={step}
          onChange={(event) => handleChange(event)}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={"Phone Interview"}>Phone Interview</MenuItem>
          <MenuItem value={"Tech Interview"}>Tech Interview</MenuItem>
          <MenuItem value={"Interview"}>Interview</MenuItem>
        </CustomSelect>
        <FormControlLabel
          control={
            <Switch onChange={handleStageEvaluation} checked={isStageOn} />
          }
          label="Stage evaluation"
        />
        <EvaluationSlider isDisabled={!isStageOn} />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Add to calendar"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Send invitation"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Notes"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChangeField}
        />
        <ButtonsWrapper>
          <SlideButton variant="contained" onClick={closeModal}>
            Cancel
          </SlideButton>
          <SlideButton variant="contained" type="submit">
            Save
          </SlideButton>
        </ButtonsWrapper>
      </CustomForm>
    </ModalWrapper>
  );
}
