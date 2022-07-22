import React from 'react';
import { TypographyTypeMap } from '@mui/material';
import { HeaderBox, HeaderDiv } from './TableHeaderStyles';
import { HeaderTypography } from './TableHeaderStyles';

interface TextProps {
  title: string;
  variant?: TypographyTypeMap['props']['variant'];
  component?: React.ElementType;
  children?: any;
}

export default function TableHeader({ title, component = 'div', children }: React.PropsWithChildren<TextProps>) {
  return (
    <HeaderBox>
      <HeaderTypography variant="h4" component={component}>
        {title}
      </HeaderTypography>
      <HeaderDiv>{children}</HeaderDiv>
    </HeaderBox>
  );
}
