import styled from '@emotion/styled';

export const ProfileWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 35px;
`;

export const CustomList = styled('ul')`
  list-style-type: none;
`;

export const CustomListElement = styled('li')`
  font-size: 15px;
  font-weight: 300;
  & > span {
    font-weight: 500;
  }

  & > a {
    text-decoration: none;
    color: #dd0000;
    font-size: 15px;
    transition: all 0.2s ease-in;
  }

  & > a:hover {
    text-decoration: underline;
    color: #b30909;
  }
`;

export const CustomSecondHeading = styled('h2')`
  font-weight: 500;
  font-size: 20px;
`;

export const CustomRateWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const CustomHrRate = styled('p')`
  margin-right: 25px;
  background: #00c936;
  padding: 5px 11px 5px 11px;
  border-radius: 25px;
`;

export const CustomTechRate = styled('p')`
  margin-right: 25px;
  background: #acc900;
  padding: 5px 11px 5px 11px;
  border-radius: 25px;
`;
