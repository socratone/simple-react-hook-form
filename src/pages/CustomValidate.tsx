import { useForm, Controller } from 'react-hook-form';
import { Form, Button, ErrorMessage } from './styles';
import Input from '@mui/material/Input';

type Data = {
  title: string;
};

// validate 함수로 yup을 사용하지 않는 방법

const CustomValidate = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: Data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <span>제목을 입력하세요</span>
      <div>
        <Controller
          name="title"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            validate: {
              tooShort: (value) => value.length >= 3,
              tooLong: (value) => value.length <= 10,
            },
          }}
          render={({ field }) => <Input {...field} />}
        />
        {errors.title?.type === 'required' && (
          <ErrorMessage>제목을 입력하세요</ErrorMessage>
        )}
        {errors.title?.type === 'tooShort' && (
          <ErrorMessage>3 글자 이상을 입력하세요</ErrorMessage>
        )}
        {errors.title?.type === 'tooLong' && (
          <ErrorMessage>10 글자 이하로 입력하세요</ErrorMessage>
        )}
      </div>

      <Button type="submit">보내기</Button>
    </Form>
  );
};

export default CustomValidate;
