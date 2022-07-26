import styled from '@emotion/styled';

export const ProfileHeaderWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`;

export const ProfileHeaderHeading = styled('h1')`
  margin: 0;
  padding-left: 20px;
  font-weight: 300;
  font-size: 25px;
  padding-top: 5px;
  width: 100%;
  display: flex;
  & > p {
    font-weight: 800;
    font-size: 25px;
    margin: 0;
    padding-left: 15px;
  }
`;
