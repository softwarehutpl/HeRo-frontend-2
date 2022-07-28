import { FormControlUnstyled } from '@mui/base';
import { FormInputWrapper, Input, Label } from './ModalFormStyles';
import React, { useEffect, useState } from 'react';
import { FormControlLabel, Switch, Typography } from '@mui/material';
import Skills from '../skills/Skills';
import { CustomFormButton, CustomTextArea, TextAreaWrapper } from '../ProjectsStyles';
import ProjectsSerivce from '../../common/Api/Projects.serivce';
import { useSearchParams } from 'react-router-dom';

function ModalForm() {
  const [name, setName] = useState<string>('');
  const [seniority, setSeniority] = useState<string>('');
  const [beginningDate, setBeginningDate] = useState<string>('');
  const [endingDate, setEndingDate] = useState<string>('');
  const [localization, setLocalization] = useState<string>('');
  const [isPublic, setIsPublic] = useState<boolean>();
  const [skillId, setSkillId] = useState<number>();
  const [skillLevel, setSkillLevel] = useState<number>();
  const [description, setDescription] = useState<string>('');

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id') || undefined;

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
  };

  const getProjectId = async () => {
    const data = await ProjectsSerivce.recruitmentHttpGet(`Get/${id}`);
    setName(data.data.name);
    setSeniority(data.data.seniority);
    setBeginningDate(data.data.beginningDate.toString());
    setEndingDate(data.data.endingDate);
    setLocalization(data.data.localization);
    setDescription(data.data.description);
  };

  useEffect(() => {
    getProjectId();
  }, []);

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
    <form onSubmit={handleOnSubmit}>
      <FormControlUnstyled value={name} required>
        <Input placeholder="Project name" onChange={handleNameOnChange} />
      </FormControlUnstyled>
      <FormControlUnstyled value={seniority} required>
        <Input placeholder="Seniority" onChange={handleSeniorityOnChange} />
      </FormControlUnstyled>
      <FormInputWrapper>
        <FormControlUnstyled value={beginningDate} style={{ flexBasis: '45%' }} required>
          <Label>From</Label>
          <Input placeholder="From" type="date" onChange={handleDateFromOnChange} />
        </FormControlUnstyled>
        <FormControlUnstyled value={endingDate} style={{ flexBasis: '45%' }} required>
          <Label>To</Label>
          <Input placeholder="To" type="date" onChange={handleDatetoOnChange} />
        </FormControlUnstyled>
      </FormInputWrapper>
      <FormControlUnstyled value={localization} required>
        <Input placeholder="Location" onChange={handleLocationOnChange} />
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
  );
}

export default ModalForm;
