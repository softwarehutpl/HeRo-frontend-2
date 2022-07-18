import { styled } from '@mui/material/styles';

export const CustomKanbanDiv = styled('div')`
    display: flex;
    flex-direction: row;
    height: 100%;

    &:last-child {
      border: none;
    }
`;


export const TableWrapper = styled('div')`
    display: flex;
    justify-content: center;
    height: 100%;
`;


export const KanbanColumn = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const DroppableDiv = styled('div')`
  padding: 4px;
  width: 250px;
  min-height: 500px;
`;


export const DraggableDiv = styled('div')`
user-select: none;
padding: 16px;
margin: 0 0 8px 0;
min-height: 50px;
`;



export const KanbanTitleDiv = styled('div')`
    display: flex;
    justify-content: center;
    height: 10%;
`;