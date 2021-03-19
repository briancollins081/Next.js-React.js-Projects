import PostGrid from "../posts/post-grid";
import s from "./all-posts.module.css";
const AllPosts = ({ posts }) => {
  return (
    <section className={s.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
