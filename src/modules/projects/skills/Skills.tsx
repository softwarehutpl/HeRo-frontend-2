import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Skills() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={skills}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}


const skills = [
    {label: 'React'},
    {label: 'Angular'},
    {label: 'Javascript'},
    {label: 'C#'},
    {label: 'Java'},
  ]