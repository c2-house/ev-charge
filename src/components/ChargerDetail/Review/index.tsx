import { FormEventHandler, useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useTheme,
} from '@chakra-ui/react';

import StarRating from './StarRating';

const Review = () => {
  const [rating, setRating] = useState(5);
  const [value, setValue] = useState('');
  const theme = useTheme();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Box p={4}>
      <Heading as='h3' size='sm' mb={3}>
        충전소 리뷰
      </Heading>
      <form onSubmit={handleSubmit}>
        <StarRating rating={rating} setRating={setRating} />
        <InputGroup size='md'>
          <Input
            pl={3}
            pr='4rem'
            placeholder='리뷰를 작성해주세요.'
            focusBorderColor={theme.colors.primary}
            name='content'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <InputRightElement w='4rem'>
            <Button h='1.75rem' size='sm'>
              등록
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
};

export default Review;
