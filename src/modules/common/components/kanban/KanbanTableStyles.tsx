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
  justify-content: space-between;
  height: 100%;
  overflow-x: scroll;
  width: 100%;
`;

export const KanbanColumn = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const DroppableDiv = styled('div')`
  padding: 4px;
  width: 100%;
  min-height: 500px;
`;

export const DraggableDivWrapper = styled('div')`
  user-select: none;
  padding: 16px;
  margin: 0 0 8px 0;
  min-height: 50px;
  border-radius: 25px;
  color: #000000;
  border: 1px solid #000000;
`;

export const DraggableNameAndAvatar = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const KanbanTitleDiv = styled('div')`
  display: flex;
  justify-content: center;
  height: 10%;
`;
