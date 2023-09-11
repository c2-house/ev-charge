import Link from 'next/link';
import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react';

import { Post } from '@/types/supabase';
import Metadata from '@/components/Metadata';
import RelatedPosts from './RelatedPosts';
import Introduction from './Content/Introduction';
import Subsidy from './Content/Subsidy';
import AcquisitionTax from './Content/AcquisitionTax';
import Lanzador from './Content/Lanzador';
import BenzEQG from './Content/BenzEQG';

interface Props {
  post: Post;
  relatedPosts: Post[];
}

const PostDetail = ({ post, relatedPosts }: Props) => {
  const { title, description, keywords, slug, created_at } = post;

  const getContent = (slug: string) =>
    ({
      'ev-charge-introduction': <Introduction slug={slug} />,
      'electric-car-subsidy': <Subsidy slug={slug} />,
      'green-car-acquisition-tax': <AcquisitionTax slug={slug} />,
      'lamborghini-lanzador': <Lanzador slug={slug} />,
      'benz-g-wagen-eqg': <BenzEQG slug={slug} />,
    }[slug] || <></>);

  return (
    <>
      <Metadata title={title} description={description} keywords={keywords} url={`/blog/${slug}`} />

      <Heading as='h2' size='xl'>
        {title}
      </Heading>
      <Text fontSize='sm' color='gray.500' mt={3}>
        {created_at}
      </Text>
      <Divider my={6} />
      <Box as='section' pb={6}>
        {getContent(slug)}
      </Box>

      <RelatedPosts posts={relatedPosts} />
      <Button variant='link' colorScheme='green' mb={4}>
        <Link href='/blog'>← 목록으로</Link>
      </Button>
    </>
  );
};

export default PostDetail;
