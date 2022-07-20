import { FormControlUnstyled } from '@mui/base';
// import { Label } from '@mui/icons-material';
import { FormInputWrapper, Input, Label } from './ModalFormStyles';

function ModalForm() {
  return (
    <div>
      <form>
        <FormControlUnstyled defaultValue="" required>
          <Input placeholder="Project name" />
        </FormControlUnstyled>
        <FormControlUnstyled defaultValue="" required>
          <Input placeholder="Seniority" />
        </FormControlUnstyled>
        <FormInputWrapper>
          <FormControlUnstyled defaultValue="" required style={{flexBasis: '45%'}}>
            <Label>From</Label>
            <Input placeholder="From" type="date" />
          </FormControlUnstyled>
          <FormControlUnstyled defaultValue="" required style={{flexBasis: '45%'}}>
            <Label>To</Label>
            <Input placeholder="To" type="date" />
          </FormControlUnstyled>
        </FormInputWrapper>
        <FormControlUnstyled defaultValue="" required>
          <Input placeholder="Location" />
        </FormControlUnstyled>
      </form>
    </div>
  );
}

export default ModalForm;
