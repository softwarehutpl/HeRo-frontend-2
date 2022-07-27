import styled from "@emotion/styled";

export const CustomDiv = styled('div')`
    display: flex;
    background: #1976D2;
    transition: background 0.2s ease-in;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    &>a{
        padding: 15px 15px;
        font-size: 15px;
        color: #ffffff;
        text-decoration: none;
    }

   &:hover {
    background: #1565c0;
   }

`;
