import * as React from 'react';
import { useState } from 'react';

const [color, setColor] = useState('');

type Values = {
  id: number;
  title: string;
  color: string;
};

const myList2: Array<Values> = [
  {
    id: 1,
    title: 'Evaluation',
    color: '#D7F8F8',
  },
  {
    id: 2,
    title: 'Interview',
    color: '#EA6D25',
  },
  {
    id: 3,
    title: 'Phone Interview',
    color: '#E05744',
  },
  {
    id: 4,
    title: 'Tech interview',
    color: '#8661D6',
  },
  {
    id: 5,
    title: 'Offer',
    color: '#1CA2FF',
  },
];

function Stage() {
  return {};
}

export default Stage();
