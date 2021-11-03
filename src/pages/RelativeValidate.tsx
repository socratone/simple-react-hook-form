import { useForm, Controller } from 'react-hook-form';
import { Form, Button, ErrorMessage } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import times from '../lib/times';

// 서로의 값에 따라 validation이 필요한 경우

type Data = {
  name: string;
  start: number;
  end: number;
};

type DefaultValues = {
  name: string;
  start: number | '';
  end: number | '';
};

const schema = yup
  .object({
    name: yup.string().required('이름을 입력하세요'),
    start: yup
      .number()
      .typeError('시작 시간을 선택하세요')
      .test(
        'start',
        '시작 시간은 종료 시간보다 작아야 합니다.',
        (value, { parent }) => (value ? value < parent.end : false)
      ),
    end: yup
      .number()
      .typeError('끝 시간을 선택하세요')
      .test(
        'start',
        '종료 시간은 시작 시간보다 커야 합니다.',
        (value, { parent }) => (value ? value > parent.start : false)
      ),
  })
  .required();

const RelativeValidate = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<DefaultValues>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: Data) => console.log(data);

  const handleBlurTime = () => {
    trigger(['start', 'end']);
  };

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

      <span>시작 시간을 선택하세요</span>
      <div>
        <Controller
          name="start"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select {...field} onBlur={handleBlurTime} style={{ width: 200 }}>
              {times.map((time) => (
                <MenuItem key={time.id} value={time.id}>
                  {time.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <ErrorMessage>{errors.start?.message}</ErrorMessage>
      </div>

      <span>끝 시간을 선택하세요</span>
      <div>
        <Controller
          name="end"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select {...field} onBlur={handleBlurTime} style={{ width: 200 }}>
              {times.map((time) => (
                <MenuItem key={time.id} value={time.id}>
                  {time.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <ErrorMessage>{errors.end?.message}</ErrorMessage>
      </div>

      <Button type="submit">보내기</Button>
    </Form>
  );
};

export default RelativeValidate;
