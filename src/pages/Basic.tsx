import { useForm } from 'react-hook-form';
import { Form, TextField, Button } from './styles';

type Data = {
  firstName: string;
  lastName: string;
  age: string;
};

const Basic = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: Data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* 두 번째 파라미터의 조건에 맞지 않으면 onSubmit이 호출되지 않는다. */}
      <TextField
        {...register('firstName', { required: true, maxLength: 20 })}
      />
      <TextField {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
      <TextField type="number" {...register('age', { min: 18, max: 99 })} />
      <Button type="submit">보내기</Button>
    </Form>
  );
};

export default Basic;
