import FeaturedPosts from "../components/home/featuredpost";
import Hero from "../components/home/hero";

import { getFeaturedPosts } from "../libs/posts-util";

const Home = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export default Home;

export const getStaticProps = (context) => {
  const featuredPosts = getFeaturedPosts();
  console.log({featuredPosts});
  return {
    props: {
      posts: featuredPosts,
      // revalidate: 600,
    },
  };
};
