import { useNavigate } from "react-router-dom";
import { StyledIconButton } from './IconButtonStyles';


interface TextProps {
    route?: string,
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    children?: any;
  }




export function HeaderIconButton({ onClick, children }: React.PropsWithChildren<TextProps>) {

 

  return (
    <StyledIconButton color="primary" >
        {children}
    </StyledIconButton>
  
  );
}