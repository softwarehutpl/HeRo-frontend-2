import { FormControlUnstyled } from '@mui/base';
import { FormInputWrapper, Input, Label } from './ModalFormStyles';
import React, { useEffect, useRef, useState } from 'react';
import { FormControlLabel, Switch, Typography } from '@mui/material';
import Skills from '../skills/Skills';
import { CustomFormButton, CustomTextArea, TextAreaWrapper } from '../ProjectsStyles';
import ProjectsSerivce from '../../common/Api/Projects.serivce';
import { useSearchParams } from 'react-router-dom';
import Moment from 'moment';

interface ModalProps {
  popupName: string;
}

const ModalForm: React.FC<ModalProps> = ({ popupName }) => {
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
  const formRef = useRef<any>(null);
  console.log(id);

  const postData = {
    name,
    beginningDate,
    endingDate,
    description,
    localization,
    seniority,
    isPublic: true,
    recruiterId: 1,
    recruitmentPosition: 'Test',
    Skills: [
      {
        skillId: 1,
        skillLevel: 5,
      },
    ],
  };

  const test = { ...postData, beginningDate: Moment(beginningDate).format(), endingDate: Moment(endingDate).format() };
  console.log(test);

  const sendProject = async () => {
    const data = await ProjectsSerivce.recruitmentHttpPost('Create', test);
  };

  const getProjectId = async () => {
    const data = await ProjectsSerivce.recruitmentHttpGet(`Get/${id}`);
    setName(data.data.name);
    setSeniority(data.data.seniority);
    setBeginningDate(Moment(data.data.beginningDate).format('YYYY-MM-DD'));
    setEndingDate(Moment(data.data.endingDate).format('YYYY-MM-DD'));
    setLocalization(data.data.localization);
    setDescription(data.data.description);
  };

  const editProjectId = async () => {
    const data = await ProjectsSerivce.recruitmentHttpPost(`Edit/${id}`, test);
  };

  useEffect(() => {
    getProjectId();
  }, []);

  console.log(popupName);

  function handleOnSubmit() {
    if (popupName === 'Edit project') {
      editProjectId();
    } else if (popupName === 'Add Project') {
      sendProject();
    }
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
  }
  function handleDatetoOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setEndingDate(event.target.value);
  }

  function handleLocationOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setLocalization(event.target.value);
  }

  function handleIsPublicOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setIsPublic(event.target.checked);
  }

  return (
    <form ref={formRef} onSubmit={handleOnSubmit}>
      <FormControlUnstyled value={name} required>
        <Input placeholder="Project name" onChange={handleNameOnChange} />
      </FormControlUnstyled>
      <FormControlUnstyled value={seniority} required>
        <Input placeholder="Seniority" onChange={handleSeniorityOnChange} />
      </FormControlUnstyled>
      <FormInputWrapper>
        <FormControlUnstyled value={beginningDate} style={{ flexBasis: '45%' }}>
          <Label>From</Label>
          <Input placeholder="From" type="date" onChange={handleDateFromOnChange} />
        </FormControlUnstyled>
        <FormControlUnstyled value={endingDate} style={{ flexBasis: '45%' }}>
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
      <CustomFormButton
        onClick={e => {
          formRef.current.submit();
        }}
        type="submit"
      >
        Save
      </CustomFormButton>
    </form>
  );
};

export default ModalForm;
