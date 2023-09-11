import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { Post } from '@/types/supabase';
import { getAllPosts } from '@/services/blog';
import PostDetail from '@/components/Blog/PostDetail';

interface Props {
  post: Post | undefined;
  relatedPosts: Post[];
}

const Post = ({ post, relatedPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!post) return null;

  return <PostDetail post={post} relatedPosts={relatedPosts} />;
};

export default Post;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { posts } = await getAllPosts();

  const post = posts.find((post) => post.slug === params?.slug);

  const relatedPosts = posts
    .filter((post) => post.slug !== params?.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return {
    props: {
      post,
      relatedPosts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
};
