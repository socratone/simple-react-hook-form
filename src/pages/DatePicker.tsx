import { useForm, Controller } from 'react-hook-form';
import { Form, Button, ErrorMessage } from './styles';
import MuiDatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import TimePicker from '@mui/lab/TimePicker';

type Data = {
  date: string;
  time: number;
};

const DatePicker = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: Data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <span>날짜를 선택하세요</span>
      <div>
        <Controller
          name="date"
          control={control}
          defaultValue={null}
          rules={{ required: true }}
          render={({ field }) => (
            <MuiDatePicker
              {...field}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        />
        {errors.date && <ErrorMessage>날짜를 선택하세요</ErrorMessage>}
      </div>

      <span>시간을 선택하세요</span>
      <div>
        <Controller
          name="time"
          control={control}
          defaultValue={null}
          rules={{ required: true }}
          render={({ field }) => (
            <TimePicker
              {...field}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        />
        {errors.time && <ErrorMessage>시간을 선택하세요</ErrorMessage>}
      </div>

      <Button type="submit">보내기</Button>
    </Form>
  );
};

export default DatePicker;
