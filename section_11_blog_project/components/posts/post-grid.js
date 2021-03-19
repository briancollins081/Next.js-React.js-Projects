import PostItem from "./post-item";

import s from "./post-grid.module.css";

const PostGrid = ({posts}) => {
  return (
    <ul className={s.grid}>
      {posts.map((p) => (
        <PostItem key={p.slug} post={p}/>
      ))}
    </ul>
  );
};

export default PostGrid;
