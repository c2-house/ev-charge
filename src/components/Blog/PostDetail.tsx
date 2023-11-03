import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Post } from 'contentlayer/generated';

import AdSense from '../Common/AdSense';
import RelatedPosts from './RelatedPosts';
import { BlogLink } from './Common';

interface Props {
  post: Post;
  relatedPosts: Post[];
}

const PostDetail = ({ post, relatedPosts }: Props) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <section>
        <Heading as='h2' size='xl'>
          {post.title}
        </Heading>
        <Text fontSize='sm' color='gray.500' mt={3}>
          {post.created_at.split('T')[0]}
        </Text>
        <Divider my={6} />
        <AdSense />
        <Box as='article' py={6}>
          <MDXContent />
        </Box>
      </section>

      <RelatedPosts posts={relatedPosts} />
      <BlogLink
        href='/blog'
        text='← 목록으로'
        sx={{ display: 'flex', justifyContent: 'flex-end' }}
      />
    </>
  );
};

export default PostDetail;
