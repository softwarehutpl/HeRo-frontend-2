import { FormControlUnstyled } from '@mui/base';
import { FormInputWrapper, Input, Label } from './ModalFormStyles';
import React from 'react';
import { FormControlLabel, Switch, Typography } from '@mui/material';
import Skills from '../skills/Skills';
import { CustomFormButton, CustomTextArea, TextAreaWrapper } from '../ProjectsStyles';

function ModalForm() {

  // function handleOnSubmit(e: any) {
  //   e.preventdefault();

  //   const PostData = {
  //     name,
  //     seniority,
  //     beginningDate,
  //     endingDate,
  //     localization,
  //     isPublic,
  //     description,
  //   };
  // }


  return (
    <div>
      {/* <form onSubmit={handleOnSubmit}> */}
      <form>
        <FormControlUnstyled defaultValue="" required>
          <Input placeholder="Project name" />
        </FormControlUnstyled>
        <FormControlUnstyled defaultValue="" required>
          <Input placeholder="Seniority" />
        </FormControlUnstyled>
        <FormInputWrapper>
          <FormControlUnstyled defaultValue="" required style={{ flexBasis: '45%' }}>
            <Label>From</Label>
            <Input placeholder="From" type="date" />
          </FormControlUnstyled>
          <FormControlUnstyled defaultValue="" required style={{ flexBasis: '45%' }}>
            <Label>To</Label>
            <Input placeholder="To" type="date" />
          </FormControlUnstyled>
        </FormInputWrapper>
        <FormControlUnstyled defaultValue="" required>
          <Input placeholder="Location" />
        </FormControlUnstyled>
        <FormControlLabel control={<Switch defaultChecked />} label="Is Public" />
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginTop: '15px' }}>
          Skills
        </Typography>
        <Skills />
        <TextAreaWrapper>
          <CustomTextArea></CustomTextArea>
        </TextAreaWrapper>
        <CustomFormButton type="submit">Save</CustomFormButton>
      </form>
    </div>
  );
}

export default ModalForm;
