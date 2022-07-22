import React, { useState } from 'react';
import SkillRating from '../rating/SkillRating';
import { CustomDeleteButton, CustomList, CustomListItem, CustomSpan } from './SkillsListStyles';

interface SkillsListProps {
  list: { id: number; label: string }[];
  onSkillDelete: (id: number) => void;
}

export const SkillsList: React.FC<SkillsListProps> = props => {
  const mapList = props.list.map(item => (
    <CustomListItem key={item.id}>
      <CustomSpan>{item.label}</CustomSpan>
      <SkillRating />
      <CustomDeleteButton onClick={e => props.onSkillDelete(item.id)} />
    </CustomListItem>
  ));
  return (
    <div>
      <CustomList>{mapList}</CustomList>
    </div>
  );
};
