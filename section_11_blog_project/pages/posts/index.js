import Head from "next/head";

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../libs/posts-util";
const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Arctic Blog Posts</title>
        <meta name="description" content="A listing of all my blog posts related to the Arctic"/>
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps = (context) => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};
export default Posts;
