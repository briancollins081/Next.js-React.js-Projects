import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../libs/posts-util";
const Posts = ({ posts }) => {
  return <AllPosts posts={posts} />;
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
