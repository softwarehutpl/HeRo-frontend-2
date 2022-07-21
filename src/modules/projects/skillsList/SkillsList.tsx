import React, { useState } from 'react';
import { Skill } from '../skills/Skills';

interface SkillsListProps {
  list: Array<Skill>;
}

export default function SkillsList({ list }: SkillsListProps): JSX.Element {
  const mapList = list.map(item => <li key={item.id}>{item.label}</li>);
  return (
    <div>
      <ul>{mapList}</ul>
    </div>
  );
}
