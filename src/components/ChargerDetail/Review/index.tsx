import { FormEventHandler, useEffect, useState } from 'react';
import { useAtomValue } from 'jotai';
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useTheme,
} from '@chakra-ui/react';

import { Review } from '@/types/database';
import { currentStationAtom } from '@/states/map';
import useReview from '@/hooks/useReview';
import StarRating from './StarRating';

const Review = () => {
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');

  const currentStation = useAtomValue(currentStationAtom);
  const { getReviews, postReview } = useReview();
  const theme = useTheme();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!content.trim()) return alert('리뷰 내용을 작성해주세요.');

    const review = {
      stationId: currentStation,
      rating,
      content,
    };

    postReview(review).then((err) => {
      if (err) return;
      getReviews(currentStation).then((res) => setReviews(res.data));
      setRating(5);
      setContent('');
    });
  };

  useEffect(() => {
    getReviews(currentStation).then((res) => setReviews(res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStation]);

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
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={100}
            autoFocus={false}
            autoComplete='off'
          />
          <InputRightElement w='4rem'>
            <Button type='submit' h='1.75rem' size='sm'>
              등록
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
};

export default Review;
