import { styled } from '@mui/material/styles';

export const CustomDiv = styled('div')`
  display: flex;
  flex-direction: row;
  width: 90%;
`;

export const TextAreaWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CustomTextArea = styled('textarea')`
  border: 1px solid #cdd2d7;
  margin-top: 25px;
  height: 80px;
  resize: none;
  margin-bottom: 15px;
  width: 100%;
  background: #f3f6f9;

  &:focus {
    outline: none !important;
    border: 1px solid #cdd2d7;
    box-shadow: none;
  }
`;

export const CustomFormButton = styled('button')`
  width: 25%;
  float: right;
  background: #1976d2;
  border: none;
  color: #fff;
  padding: 10px;
  transition: opacity 0.2s ease-in;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
