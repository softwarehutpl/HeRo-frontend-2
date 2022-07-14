import {useTables } from "../../../contexts/CandidatesTablesContext"
import { StyledIconButton } from './IconButtonStyles';


interface TextProps {
    route?: string,
    children?: any;
  }



export function HeaderIconButton({ children }: React.PropsWithChildren<TextProps>) {

  const setTableState = useTables().setValue;
  const tableValue = useTables().value;

  const handleClick = ()=> {
    tableValue === 0 ? setTableState(1) : setTableState(0);
  }

  return (
    <StyledIconButton color="primary" onClick={() => handleClick()}>
        {children}
    </StyledIconButton>
  
  );
}