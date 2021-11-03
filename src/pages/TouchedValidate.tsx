import { useForm, Controller } from 'react-hook-form';
import { Form, Button, ErrorMessage } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';

type Data = {
  name: string;
  gender: number;
};

const schema = yup
  .object({
    name: yup.string().required('이름을 입력하세요'),
    gender: yup.number().typeError('성별을 선택하세요'),
  })
  .required();

const TouchedValidate = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur', // Validate.js에서 mode 옵션 추가 (default는 'onSubmit')
    resolver: yupResolver(schema),
  });
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
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
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
        <ErrorMessage>{errors.gender?.message}</ErrorMessage>
      </div>

      <Button type="submit">보내기</Button>
    </Form>
  );
};

export default TouchedValidate;
