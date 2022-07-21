import React from 'react';
import {useTables } from "../../../contexts/CandidatesTablesContext"
import { StyledIconButton } from './IconButtonStyles';

// Wrong location for the enum. Its supposed to be IconButton, enum for display should be shared
export enum CandidateDisplayType {
  TABLE,
  KABAN,
  PLUS
}

interface TextProps {
    active: boolean;
    onClick: (value: CandidateDisplayType) => void;
    type: CandidateDisplayType;
    children?: JSX.Element;
  }



export function HeaderIconButton({ active, onClick, type,  children }: React.PropsWithChildren<TextProps>) {

  const setTableState = useTables().setValue;
  const tableValue = useTables().value;

  const handleClick = ()=> {
    tableValue === 0 ? setTableState(1) : setTableState(0);
    onClick(type);
  }


  return (
    <StyledIconButton  active={+active} color="primary" onClick={() => handleClick()}>
        {children}
    </StyledIconButton>
  
  );
}