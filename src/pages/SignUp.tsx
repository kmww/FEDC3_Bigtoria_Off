import { Box, Container } from '@mui/material';

import SignUpInput from '../components/SignUp//SignUpInput';
import SignUpButton from '../components/SignUp/SignUpButton';
import DatePicker from '../components/StoryEdit/DatePicker';
import useSignUpForm from '../hooks/useSignUpForm';

const SignUp = () => {
  const {
    values,
    isLoading,
    errors,
    date,
    handleSubmit,
    handleChange,
    handleDateChange,
  } = useSignUpForm();

  return (
    <Container sx={{ marginTop: '1rem' }}>
      <form onSubmit={handleSubmit}>
        <SignUpInput
          placeholder='닉네임'
          innerText='영어, 한글, 숫자 (4-12자리)'
          type='text'
          name='fullName'
          value={values.fullName}
          onChange={handleChange}
          errorMsg={errors.fullName}
        />
        <SignUpInput
          placeholder='이메일 주소'
          type='text'
          name='email'
          value={values.email}
          onChange={handleChange}
          errorMsg={errors.email}
        />
        <SignUpInput
          placeholder='비밀번호'
          innerText='6-15자리'
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange}
          errorMsg={errors.password}
        />
        <SignUpInput
          placeholder='비밀번호 확인'
          type='password'
          name='passwordConfirm'
          value={values.passwordConfirm}
          onChange={handleChange}
          errorMsg={errors.passwordConfirm}
        />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <DatePicker value={date} onChange={handleDateChange} />
          <SignUpInput
            placeholder='직업'
            type='text'
            name='job'
            value={values.job}
            onChange={handleChange}
            errorMsg={errors.job}
          />
        </Box>
        <SignUpButton isLoading={isLoading} />
      </form>
    </Container>
  );
};

export default SignUp;
