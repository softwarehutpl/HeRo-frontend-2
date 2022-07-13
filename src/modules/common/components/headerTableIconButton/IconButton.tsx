import { useNavigate } from "react-router-dom";
import { StyledIconButton } from './IconButtonStyles';


interface TextProps {
    route?: string,
    // onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    children?: any;
  }




export function HeaderIconButton({ route, children }: React.PropsWithChildren<TextProps>) {

  const navigate = useNavigate();

  return (
    <StyledIconButton color="primary" onClick={() => navigate(`${route}`)}>
        {children}
    </StyledIconButton>
  
  );
}