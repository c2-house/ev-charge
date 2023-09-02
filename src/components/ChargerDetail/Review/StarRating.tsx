import { Box, Flex, Text, useTheme } from '@chakra-ui/react';
import { StarFillIcon, StarIcon } from '../../../../public/icons';

interface Props {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}
const StarRating = ({ rating, setRating }: Props) => {
  const theme = useTheme();

  return (
    <Flex mb={3}>
      <input type='hidden' name='rating' value={rating} />
      <Flex>
        {[1, 2, 3, 4, 5].map((i) => (
          <Box key={i} onClick={() => setRating(i)}>
            {i <= rating ? (
              <StarFillIcon style={{ fill: theme.colors.accent }} />
            ) : (
              <StarIcon style={{ fill: theme.colors.gray['300'] }} />
            )}
          </Box>
        ))}
      </Flex>
      <Text ml={2} fontWeight='semibold'>
        {rating}
      </Text>
    </Flex>
  );
};

export default StarRating;
