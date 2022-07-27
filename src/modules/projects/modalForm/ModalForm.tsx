import { FormControlUnstyled } from '@mui/base';
import { FormInputWrapper, Input, Label } from './ModalFormStyles';
import React, { useState } from 'react';
import { FormControlLabel, Switch, Typography } from '@mui/material';
import Skills from '../skills/Skills';
import { CustomFormButton, CustomTextArea, TextAreaWrapper } from '../ProjectsStyles';
import ProjectsSerivce from '../../common/Api/Projects.serivce';

function ModalForm() {
  const [name, setName] = useState<string>();
  const [seniority, setSeniority] = useState<string>();
  const [beginningDate, setBeginningDate] = useState<string>();
  const [endingDate, setEndingDate] = useState<string>();
  const [localization, setLocalization] = useState<string>();
  const [isPublic, setIsPublic] = useState<boolean>();
  const [skillId, setSkillId] = useState<number>();
  const [skillLevel, setSkillLevel] = useState<number>();
  const [description, setDescription] = useState<string>();

  const postData = {
    name,
    beginningDate,
    endingDate,
    description,
    localization,
    seniority,
    isPublic,
    recruiterId: 1,
    Skills: [
      {
        skillId: 1,
        skillLevel: 5,
      },
    ],
  };

  const sendProject = async () => {
    const data = await ProjectsSerivce.recruitmentHttpPost('Create', postData);
    console.log(data);
  };

  function handleOnSubmit(e: any) {
    sendProject();
  }

  function handleNameOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setName(event.target.value);
  }

  function handleSeniorityOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setSeniority(event.target.value);
  }

  function handleDateFromOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setBeginningDate(event.target.value);
    console.log(beginningDate);
  }
  function handleDatetoOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setEndingDate(event.target.value);
    console.log(endingDate);
  }

  function handleLocationOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setLocalization(event.target.value);
    console.log(localization);
  }

  function handleIsPublicOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setIsPublic(event.target.checked);
    console.log(isPublic);
  }

  function handleDescriptionOnChange(event: React.KeyboardEvent<HTMLInputElement>) {
    event.preventDefault();
    setDescription(event.target.value);
    console.log(description);
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <FormControlUnstyled defaultValue="" required>
          <Input value={name} placeholder="Project name" onChange={handleNameOnChange} />
        </FormControlUnstyled>
        <FormControlUnstyled defaultValue="" required>
          <Input value={seniority} placeholder="Seniority" onChange={handleSeniorityOnChange} />
        </FormControlUnstyled>
        <FormInputWrapper>
          <FormControlUnstyled defaultValue="" required style={{ flexBasis: '45%' }}>
            <Label>From</Label>
            <Input placeholder="From" value={beginningDate} type="date" onChange={handleDateFromOnChange} />
          </FormControlUnstyled>
          <FormControlUnstyled defaultValue="" required style={{ flexBasis: '45%' }}>
            <Label>To</Label>
            <Input value={endingDate} placeholder="To" type="date" onChange={handleDatetoOnChange} />
          </FormControlUnstyled>
        </FormInputWrapper>
        <FormControlUnstyled defaultValue="" required>
          <Input value={localization} placeholder="Location" onChange={handleLocationOnChange} />
        </FormControlUnstyled>
        <FormControlLabel control={<Switch defaultChecked onChange={handleIsPublicOnChange} />} label="Is Public" />
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginTop: '15px' }}>
          Skills
        </Typography>
        <Skills />
        <TextAreaWrapper>
          <CustomTextArea value={description} onChange={e => setDescription(e.target.value)} />
        </TextAreaWrapper>
        <CustomFormButton type="submit">Save</CustomFormButton>
      </form>
      <p>{description}</p>
    </div>
  );
}

export default ModalForm;
