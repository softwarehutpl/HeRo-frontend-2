import React from "react";
import { useNavigate } from "react-router-dom";

import {
  CustomizedBox,
  TypographyTitle,
  TypographyValue,
} from "./InfoBoxStyles";
import { CustomizedButton } from "./InfoBoxStyles";

interface InfoBoxTypes {
  title: string;
  value: number;
  name: string;
  route: string;
}

export default function InfoBox({ title, value, name, route }: InfoBoxTypes) {
  const navigate = useNavigate();
  return (
    <CustomizedBox>
      <TypographyTitle variant="h4">{title}</TypographyTitle>
      <TypographyValue variant="h2">{value}</TypographyValue>
      <CustomizedButton variant="outlined" onClick={() => navigate(`${route}`)}>
        {name}
      </CustomizedButton>
    </CustomizedBox>
  );
}
