import { useForm, Controller } from 'react-hook-form';
import { Form, Button, CheckboxLabel } from './styles';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';

type Data = {
  name: string;
  gender: number;
  agree: number;
};

const ControllerPage = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data: Data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <span>이름을 입력하세요</span>
      <div>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} />}
        />
      </div>

      <span>성별을 선택하세요</span>
      <div>
        <Controller
          name="gender"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select {...field} style={{ width: 200 }}>
              <MenuItem value={1}>남</MenuItem>
              <MenuItem value={2}>여</MenuItem>
            </Select>
          )}
        />
      </div>

      <CheckboxLabel>
        <span>보내시려면 체크하세요</span>
        <Controller
          name="agree"
          control={control}
          defaultValue={false}
          rules={{ required: true }}
          render={({ field }) => <Checkbox {...field} />}
        />
      </CheckboxLabel>

      <Button type="submit">보내기</Button>
    </Form>
  );
};

export default ControllerPage;
