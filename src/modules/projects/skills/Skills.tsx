import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useEffect, useState } from 'react';
import { SkillsList } from '../skillsList/SkillsList';
import skills from '../../common/mocks/Skills.json';
import SkillsService from '../../common/Api/Skills.service';

export interface Skill {
  id: number;
  label: string;
}

export default function Skills() {
  const [skillList, setSkillList] = useState<Skill[]>([]);
  const [test, setTest] = useState<Skill[]>([]);

  const handleOnChange = (newSkill: Skill): void => {
    if (newSkill !== null) {
      setSkillList(prevState => [...prevState, newSkill]);
    }
  };

  const handleDelete = (id: number): void => {
    setSkillList(prevState => {
      return prevState.filter(skillList => skillList.id !== id);
    });
  };

  useEffect(() => {
    const skillsData = SkillsService.skillHttpGet('GetList');
    skillsData.then(res => setTest(res.test));
  }, []);

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={skills.filter(x => !skillList.includes(x))}
        // options={test ? test : console.log('sd')}
        sx={{ width: 300 }}
        onChange={(_event, newSkill) => {
          handleOnChange(newSkill as Skill);
        }}
        renderInput={params => <TextField {...params} label="Skill" />}
      />
      <SkillsList list={skillList} onSkillDelete={handleDelete} />
    </div>
  );
}
