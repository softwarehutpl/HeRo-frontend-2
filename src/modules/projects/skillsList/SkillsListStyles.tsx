import styled from '@emotion/styled';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export const CustomList = styled('ul')`
  list-style-type: none;
  padding-left: 5px;
`;

export const CustomListItem = styled('li')`
  display: flex;
`;

export const CustomSpan = styled('span')`
  min-width: 150px;
  word-break: break;
`;

export const CustomDeleteButton = styled(RemoveCircleOutlineIcon)`
  cursor: pointer;
  color: #dd0000;
  transition: transform 0.2s ease-in;

  &:hover {
    transform: scale(1.2);
  }
`;
