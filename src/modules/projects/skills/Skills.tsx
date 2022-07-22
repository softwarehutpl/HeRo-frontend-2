import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React from 'react';
import { SkillsList } from '../skillsList/SkillsList';
import skills from '../../common/mocks/Skills.json';

export interface Skill {
  id: number;
  label: string;
}

export default function Skills() {
  const [skillList, setSkillList] = React.useState<Skill[]>([]);

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

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={skills.filter(x => !skillList.includes(x))}
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
