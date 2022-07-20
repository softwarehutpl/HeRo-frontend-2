import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Skills() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={skills}
      sx={{ width: 300 }}
      onChange={(event, value) => console.log(value)}
      renderInput={(params) => <TextField {...params} label="Skill" />}
    />
  );
}


const skills = [
    {id: '1', label: 'React'},
    {id: '2', label: 'Angular'},
    {id: '3', label: 'Javascript'},
    {id: '4', label: 'C#'},
    {id: '5', label: 'Java'},
  ]