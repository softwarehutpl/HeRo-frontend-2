import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";


export const EditDataButton = ({ index }: any) => {
    const handleEditClick = () => {
      console.log(`editDataButton clicked ${index}`);
  
      // go to ...candidates?projrctId=1&status=hired filet
    };
  
    return (
      <IconButton onClick={handleEditClick}>
        <EditIcon style={{ color: "#1976d2" }}></EditIcon>
      </IconButton>
    );
  };