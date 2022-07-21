import React, { useState } from 'react';
import DeleteButton from '../deleteButton/DeleteButton';
import SkillRating from '../rating/SkillRating';
import { Skill } from '../skills/Skills';
import { CustomList, CustomListItem } from './SkillsListStyles';

interface SkillsListProps {
  list: Array<Skill>;
}

export default function SkillsList({ list }: SkillsListProps): JSX.Element {
  const mapList = list.map(item => (
    <CustomListItem key={item.id}>
      {item.label}
      <SkillRating />
      <DeleteButton />
    </CustomListItem>
  ));
  return (
    <div>
      <CustomList>{mapList}</CustomList>
    </div>
  );
}
