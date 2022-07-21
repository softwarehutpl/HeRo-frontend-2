import React, { useState } from 'react';
import SkillRating from '../rating/SkillRating';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { CustomDeleteButton, CustomList, CustomListItem, CustomSpan } from './SkillsListStyles';

interface SkillsListProps {
  list: {id: string; label: string }[];
  onDeleteSkill: (id: string) => void;
}

export const SkillsList: React.FC<SkillsListProps> = props => {
  const mapList = props.list.map(item => (
    <CustomListItem key={item.id}>
      <CustomSpan>{item.label}</CustomSpan>
      <SkillRating />
       <CustomDeleteButton onClick={props.onDeleteSkill.bind(null, item.id)}/>
    </CustomListItem>
  ));
  return (
    <div>
      <CustomList>{mapList}</CustomList>
    </div>
  );
}
