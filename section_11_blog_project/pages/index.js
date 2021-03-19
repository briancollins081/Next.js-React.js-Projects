import Head from "next/head";
import FeaturedPosts from "../components/home/featuredpost";
import Hero from "../components/home/hero";

import { getFeaturedPosts } from "../libs/posts-util";

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Andere's Blog Posts</title>
        <meta
          name="description"
          content="Fiction in the Arctic - Explore the beauty of imagination with daily stories about the arctic"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export default Home;

export const getStaticProps = (context) => {
  const featuredPosts = getFeaturedPosts();
  console.log({ featuredPosts });
  return {
    props: {
      posts: featuredPosts,
      // revalidate: 600,
    },
  };
};
