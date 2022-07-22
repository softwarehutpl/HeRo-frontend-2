import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export const HeaderBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: #f4f4f4;
  margin-right: 60px;
`;

export const HeaderTypography = styled(Typography)({
  padding: '0 50px 0 20px',
}) as typeof Typography;

export const HeaderDiv = styled(Box)`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100px;
`;

export const HeaderIconButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #ffffff;
  border-radius: 0;
  background-color: #030303;

  :active {
    background-color: #0000ff;
  }
`;
