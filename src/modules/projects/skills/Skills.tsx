import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useEffect, useState } from 'react';
import { SkillsList } from '../skillsList/SkillsList';
import SkillsService from '../../common/Api/Skills.service';
import { Skill } from '../../common/interfaces/Skill.interface';

export default function Skills() {
  const [skillList, setSkillList] = useState<Skill[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  const handleOnChange = (id: number, label: string): void => {
    setSkillList(prevState => [...prevState, { id, name: label }]);
  };

  const handleDelete = (id: number): void => {
    setSkillList(prevState => {
      return prevState.filter(skillList => skillList.id !== id);
    });
  };

  useEffect(() => {
    const skillsData = SkillsService.skillHttpGet('GetList');
    skillsData.then(res => setSkills(res));
  }, []);

  return (
    <>
      {skills && (
        <div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            // options={skills.filter(x => !skillList.includes(x))}
            // options={skills
            //   .map(skill => ({ id: skill.id, label: skill.name }))
            //   .filter(skill => !skillList.includes(skill.label as any))}
            options={skills.filter(obj => !skillList.includes(obj)).map(obj => ({ id: obj.id, label: obj.name }))}
            // options={skills.map(skill => ({id: skill.id, label: skill.name})).filter(name => !skillList.includes(name: skill.label))}
            sx={{ width: 300 }}
            onChange={(_event, option) => {
              if (option?.id && option?.label) {
                handleOnChange(option.id, option.label);
              }
            }}
            renderInput={params => <TextField {...params} label="Skill" />}
          />
          <SkillsList list={skillList} onSkillDelete={handleDelete} />
        </div>
      )}
    </>
  );
}
