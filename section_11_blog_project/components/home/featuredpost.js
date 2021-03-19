import PostsGrid from "../posts/post-grid";
import s from "./featuredpost.module.css";
const FeaturedPosts = ({posts}) => {
  return (
    <section className={s.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
