import PostContent from "../../components/posts/post-detail/post-content";

import { getPostData, getPostsFiles } from "../../libs/posts-util";

const PostDetails = ({ post }) => {
  return <PostContent post={post} />;
};

export default PostDetails;

export const getStaticProps = (context) => {
  const { slug } = context.params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600, //single markdown file update
  };
};

export const getStaticPaths = () => {
  /* Nice approach for a large blog 
  return {
    paths: [],
    fallback: 'blocking'
  } */

  const postFiles = getPostsFiles();
  const slugs = postFiles.map((pf) => pf.replace(/\.md$/, ""));

  return {
    paths: slugs.map((s) => ({ params: { slug: s } })), //all paths in advance
    fallback: false,
  };
};
