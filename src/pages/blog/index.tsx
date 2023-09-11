import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { List } from '@chakra-ui/react';

import { Post } from '@/types/supabase';
import { getAllPosts } from '@/services/blog';
import generateRssFeed from '@/utils/rss';
import Metadata from '@/components/Metadata';
import PostListItem from '@/components/Blog/PostListItem';

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata
        title='블로그'
        description='전기차와 관련된 유용한 정보를 알려드립니다.'
        keywords='전기차 블로그, 전기차 정보, 전기차 팁'
        url='/blog'
      />

      <List>
        {posts.map(({ id, title, description, slug, image_url }) => (
          <PostListItem
            key={id}
            title={title}
            description={description}
            slug={slug}
            imgSrc={image_url}
          />
        ))}
      </List>
    </>
  );
};

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const { posts } = await getAllPosts();
  generateRssFeed();

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
