import { Divider, Heading, Text } from '@chakra-ui/react';
import { Post } from 'contentlayer/generated';

import AdSense from '../Common/AdSense';
import RelatedPosts from './RelatedPosts';
import { BlogLink } from './Common';
import Mdx from './Mdx';

interface Props {
  post: Post;
  relatedPosts: Post[];
}

const PostDetail = ({ post, relatedPosts }: Props) => {
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
        <Mdx code={post.body.code} />
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
