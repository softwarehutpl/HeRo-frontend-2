import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import {CustomizedBox} from "./styled/StyledInfoBox";
import {CustomizedButton} from "./styled/StyledInfoBox";



interface InfoBoxTypes{
  title: string,
  value: number,
  name: string,
  route: string
};


export default function InfoBox({title, value, name, route}: InfoBoxTypes) {

  const navigate = useNavigate();
  return (
    <CustomizedBox >
      <Typography variant="h4" component="div" sx={{
        padding: `10px 50px 0 20px`,
        marginBottom: "30px"
      }}>
        {title}
      </Typography>
      <Typography variant="h2" component="div" sx={{
        padding: `0 30px`,
        fontWeight: "100"
      }}>
        {value}
      </Typography>
        <CustomizedButton variant="outlined" onClick={() => navigate(`${route}`)}>
          {name}
        </CustomizedButton>
    </CustomizedBox>
  );
}

